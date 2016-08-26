angular
  .module('app')
  .controller('paidCtrl', function($scope, $rootScope, $location, emailSrvc) {

    $scope.songs = JSON.parse(window.localStorage.getItem('songs'));
    $scope.inProgress = false;
    $scope.emailMatch = true;
    $scope.songsSent = false;
    $scope.emailSent = false;

    if( !(window.localStorage.getItem('paid')) ) {
      $location.path('/');
    }

    $scope.emailConsumer = function(email) {
      if(email.email === email.confirm) {
        $scope.emailMatch = true;
        $scope.inProgress = true;
        var data = {songs: $scope.songs, email: email.email};
          emailSrvc.email(data).then(function(r) {
            $scope.songsSent = true;
            $scope.inProgress = false;
            $scope.emailSent = true;
            localStorage.clear();
          });
      } else {
        $scope.emailMatch = false;
      }
    };
  });
