angular.module('app')
  .directive('stripePayment', function() {

    return {
      restrict: 'E',
      template: '<button class="text-dec" id="checkout-btn">Purchase</button>',
      scope: {
        price: '='
      },
      controller: function($scope, stripeSrvc, cart, $rootScope) {
        $scope.charge = function(token, price) {
          stripeSrvc.charge({token: token, transaction: price}).then(function(r) {
            var currentCart = cart.getCart();
            $rootScope.$broadcast('paid', currentCart);
          });
        };
      },
      link: function(scope, ele, attr) {
        var handler = StripeCheckout.configure({
          key: 'pk_test_u5uUJKPD56K1E4dkEVIAeotQ',
          image: 'https://pre10.deviantart.net/1fb0/th/pre/f/2012/217/7/7/pre_cut_cat_stock_png_by_juleesan-d59yut3.png',
          locale: 'auto',
          token: function(token) {
            //You can access the token ID with 'token.id'
            //Get the token ID to your server-side code for use
            console.log("SUCCESSFUL TRANSACTION:", {token: token});
            scope.charge(token, scope.price);
          }
        });

        $('#checkout-btn').on('click', function(e) {
          var price = scope.price / 0.01;
          handler.open({
            name: 'Stripe Demo',
            description: 'This is just a demo'
          });
          e.preventDefault();
        });

        $(window).on('popstate', function() {
          handler.close();
        });
      }
    };

  });

// templateUrl: './view/stripeTmpl.html'
