angular
  .module('app')
  .directive('albumContainer', function() {

    return {
      restrict: 'E',
      templateUrl: './view/albumContainer.html',
      scope: {
        data: '='
      },
      controller: function($scope, cart, ngDialog) {
        $scope.informAdd= function() {
          $scope.type = "Album";
          ngDialog.open({ template: './view/addToCart.html', className: 'ngdialog-theme-default', scope: $scope });
        };

        $scope.informAlready = function() {
          $scope.type = "Album";
          ngDialog.open({ template: './view/alreadyInCart.html', className: 'ngdialog-theme-default', scope: $scope });
        };

        $scope.addToCart = function(data) {
          // console.log(data);
          // var albumID = data.albumID;
          var temp = cart.updateCart($scope.data, $scope.data.cartID);
          if(temp) {
            $scope.informAdd();
          } else {
            $scope.informAlready();
          }
        };
      }
    };

  });
