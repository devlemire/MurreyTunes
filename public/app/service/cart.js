angular
  .module('app')
  .service('cart', function() {

    var cart = [];
    var cartIDs = [];

    this.getCart = function() {
      return cart;
    };

    this.total = 0;

    this.updateTotal = function(amount) {
      var temp = Number(amount);
      this.total += temp;
      this.total = Number(this.total.toFixed(2));
    };

    this.updateCart = function(song, ID) {
      if(cartIDs.indexOf(ID) === -1) {
        cartIDs.push(ID);
        cart.push(song);
        this.updateTotal(song.price);
        return true;
      }

      return false;
    };

      this.reduceCart = function(price, ID) {
        var temp = cartIDs.indexOf(ID);
        cart.splice(temp, 1);
        cartIDs.splice(temp, 1);
        this.updateTotal(-price);
      };

      this.getTotal = function() {
        return this.total;
      };

  });
