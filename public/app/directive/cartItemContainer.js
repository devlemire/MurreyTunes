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

        $scope.informRemove = function() {
          ngDialog.open({ template: './view/removeFromCart.html', className: 'ngdialog-theme-default' });
        };

        $scope.reduceCart = function() {
          cart.reduceCart($scope.data.price, $scope.data.cartID);
          $scope.$parent.getTotal();
          $scope.informRemove();
        };

      }
    };

  });
