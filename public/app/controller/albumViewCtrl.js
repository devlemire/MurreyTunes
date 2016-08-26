angular
  .module('app')
  .controller('albumViewCtrl', function($scope, $stateParams, mediaLoading) {

    $scope.data = mediaLoading.getSpecificAlbum($stateParams.id);
    $scope.songs = mediaLoading.getSpecificSongs($stateParams.id);

  });
