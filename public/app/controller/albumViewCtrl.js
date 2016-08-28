angular
  .module('app')
  .controller('albumViewCtrl', function($scope, $stateParams, mediaLoading) {

    $scope.data = mediaLoading.getSpecificAlbum($stateParams.id);
    $scope.songs = mediaLoading.getSpecificSongs($stateParams.id);


    $scope.addAlbumToCart = function(data) {
      console.log(data);
      var albumID = data.albumID;
    };
  });
