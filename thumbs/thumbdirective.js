(function() {

  angular.module('kittenCreator')
    .directive('thumbs', thumbs);

  thumbs.$inject = ['kittenMachine'];

  function thumbs(kittenMachine) {
    return {
      scope: {},
      restrict: 'E',
      controller: 'thumbController',
      controllerAs: 'thumbCtrl',
      templateUrl: './thumbs/thumbs.html'
    };
  }

})();
