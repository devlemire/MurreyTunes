angular
  .module('app')
  .service('stripeSrvc', function($http) {
    this.charge = function(token) {
      return $http({
        method: 'POST',
        url: '/api/charge',
        data: token
      });
    };
  });
