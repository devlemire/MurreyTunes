angular
  .module('app')
  .directive('toggleNav', function() {

    return {
      restrict: 'A',
      link: function(scope, ele, attr) {
        scope.showNav = function() {
          document.getElementById('mobile-menu-nav').style.width = "50%";
        };

        scope.closeNav = function() {
          document.getElementById('mobile-menu-nav').style.width = "0px";
        };
      }
    };

  });
