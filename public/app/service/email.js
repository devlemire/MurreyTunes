angular
  .module('app')
  .service('emailSrvc', function($http) {

    this.email = function(data) {
      return $http({
        method: 'POST',
        url: '/api/email',
        data: data
      });
    };

  });
