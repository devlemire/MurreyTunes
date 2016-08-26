angular
  .module('app')
  .service('emailSrvc', function($http) {

    this.email = function(data) {
      return $http({
        method: 'POST',
        url: 'http://localhost:4040/api/email',
        data: data
      });
    };

  });
