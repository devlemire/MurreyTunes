angular
  .module('app')
  .controller('albumViewCtrl', function($scope, $stateParams, mediaLoading, cart, ngDialog) {

    $scope.data = mediaLoading.getSpecificAlbum($stateParams.id);
    $scope.songs = mediaLoading.getSpecificSongs($stateParams.id);

    $scope.informAdd= function() {
      $scope.type = "Album";
      ngDialog.open({ template: './view/addToCart.html', className: 'ngdialog-theme-default', scope: $scope });
    };

    $scope.informAlready = function() {
      $scope.type = "Album";
      console.log($scope.type);
      ngDialog.open({ template: './view/alreadyInCart.html', className: 'ngdialog-theme-default', scope: $scope });
    };

    $scope.addToCart = function(data) {
      var temp = cart.updateCart($scope.data, $scope.data.cartID);
      if(temp) {
        $scope.informAdd();
      } else {
        $scope.informAlready();
      }
    };
  });
