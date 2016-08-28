angular
  .module('app')
  .directive('songContainer', function() {

    return {
      restrict: 'EA',
      templateUrl: './view/songContainer.html',
      scope: {
        data: '=',
      },
      controller: function($rootScope, $scope, ngAudio, ngDialog, cart, $state, $q) {

        if($scope.data.preview) {
          $scope.sound = ngAudio.load($scope.data.preview);
        }

        $scope.songController = function() {
          // $rootScope.$broadcast('pauseAll');
          // setTimeout(function() {
          //   console.log('IS PAUSED:', $scope.sound.paused);
          //   if($scope.sound.paused) {
          //     $scope.sound.play();
          //   } else {
          //     $scope.sound.stop();
          //     $scope.sound = ngAudio.load($scope.data.preview);
          //   }
          // }, 100);
            if($scope.sound.paused) {
              $scope.sound.play();
            } else {
              $scope.sound.stop();
              $scope.sound = ngAudio.load($scope.data.preview);
            }
        };

        $rootScope.$on('pauseAll', function() {
          if($scope.data.preview) {
            $scope.sound.stop();
            $scope.sound = ngAudio.load($scope.data.preview);
          }
        });

        $rootScope.$on("$stateChangeStart", function stopSong() {
          if($scope.data.preview) {
            $scope.sound.stop();
          }
        });

        $scope.informAdd= function() {
          $scope.type = "Song";
          ngDialog.open({ template: './view/addToCart.html', className: 'ngdialog-theme-default', scope: $scope });
        };

        $scope.informAlready = function() {
          $scope.type = "Song";
          console.log($scope.type);
          ngDialog.open({ template: './view/alreadyInCart.html', className: 'ngdialog-theme-default', scope: $scope });
        };

        $scope.addToCart = function() {
          console.log($scope.data);
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
