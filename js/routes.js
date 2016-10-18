(function () {

  'use strict';

  angular.module('kittenCreator')
    .config(['$routeProvider', routes]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'kittenController',
        controllerAs: 'kittenCtrl',
        templateUrl: 'allkittens.html'
      })
    .when('/new', {
      controller: 'newKittenController',
      controllerAs: 'newKittenCtrl',
      templateUrl: 'newkitten.html'
    });
  }

})();
