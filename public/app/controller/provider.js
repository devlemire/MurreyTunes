angular
  .module('app')
  .controller('provider', function($scope, $rootScope, ngDialog, $location) {

    $rootScope.$on('paid', function(event, data) {
      console.log('PAYMENT RECIEVED, SONGS PAID FOR:', data);
      $scope.downloadLinks = [];
      $scope.songNames = [];
      for(var i = 0; i < data.length; i++) {
        $scope.downloadLinks.push(data[i].download);
        $scope.songNames.push(data[i].song);
      }

      window.localStorage.setItem('paid', true);
      window.localStorage.setItem('songs', JSON.stringify(data));
      $location.path('/paid');
    });

  });
