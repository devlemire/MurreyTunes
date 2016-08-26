var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config/config.js');
var stripe = require('stripe')(config.stripePublic);
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://richardmurreystore%40gmail.com:'+config.gmailPass+'@smtp.gmail.com');
var app = express();

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(express.static('../../public'));

app.post('/api/charge', function(req,res) {
  console.log('INCOMING PURCHASE', req.body);
  // Get the credit card details submitted by the form
  var token = req.body.token.id; // Using Express
  var price = req.body.transaction / 0.01;
  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
   amount: price, // Amount in cents
   currency: "usd",
   source: token,
   description: "MurreyTunes Store"
  }, function(err, charge) {
   if (err && err.type === 'StripeCardError') {
     // The card has been declined
   } else {
     // Store order status
     res.status(200).send(charge);
   }
 });
});

app.post('/api/email', function(req, res) {
  // setup e-mail data with unicode symbols
  var email = req.body.email;
  var links = [];
  for(var i in req.body.songs) {
    links.push({path: req.body.songs[i].download});
  }

  console.log('LINKS', links);

  var mailOptions = {
      from: '"MurreyTunes" <richardmurreytunes@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Your new music from MurreyTunes', // Subject line
      text: 'Thanks for shopping with us over at MurreyTunes. Check out the file attachments for your new music. Enjoy!',
      html: '<p>Thanks for shopping with us over at MurreyTunes. Check out the file attachments for your new music. Enjoy!</p>',
      attachments: links
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.status(200).send();
  });
});

app.listen(config.port, function() { console.log("Server initiated on port", config.port); });
