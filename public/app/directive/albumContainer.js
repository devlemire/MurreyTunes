angular
  .module('app')
  .directive('albumContainer', function() {

    return {
      restrict: 'E',
      templateUrl: './view/albumContainer.html',
      scope: {
        data: '='
      }
    };

  });
