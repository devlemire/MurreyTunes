angular
  .module('app')
  .service('stripeSrvc', function($http) {
    this.charge = function(token) {
      return $http({
        method: 'POST',
        url: 'http://localhost:4040/api/charge',
        data: token
      });
    };
  });
