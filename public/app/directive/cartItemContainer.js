angular
  .module('app')
  .directive('cartItem', function() {

    return {
      restrict: 'E',
      templateUrl: './view/cartItem.html',
      scope: {
        data: '=',
      },
      controller: function($scope, ngDialog, cart) {

        $scope.reduceCart = function() {
          cart.reduceCart($scope.data.price, $scope.data.cartID);
          $scope.$parent.getTotal();
        };

      }
    };

  });
