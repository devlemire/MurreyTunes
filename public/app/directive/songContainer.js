angular
  .module('app')
  .directive('songContainer', function() {

    return {
      restrict: 'EA',
      templateUrl: './view/songContainer.html',
      scope: {
        data: '=',
      },
      controller: function($rootScope, $scope, ngAudio, ngDialog, cart, $state) {

        if($scope.data.preview) {
          $scope.sound = ngAudio.load($scope.data.preview);
        }

        $rootScope.$on("$stateChangeStart", function stopSong() {
          if($scope.data.preview) {
            $scope.sound.stop();
          }
        });

        $scope.informAdd= function() {
          ngDialog.open({ template: './view/addToCart.html', className: 'ngdialog-theme-default' });
        };

        $scope.informAlready = function() {
          ngDialog.open({ template: './view/alreadyInCart.html', className: 'ngdialog-theme-default' });
        };

        $scope.addToCart = function() {
          var temp = cart.updateCart($scope.data, $scope.data.cartID);
          if(temp) {
            $scope.informAdd();
          } else {
            $scope.informAlready();
          }
        };
      },
    };
  });
