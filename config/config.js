(function () {

  'use strict';

  angular.module('kittenCreator')
    .config(['$routeProvider', routes]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'kittenController',
        controllerAs: 'kittenCtrl',
        templateUrl: './allkitten/allkittens.html'
      })
      .when('/new', {
        controller: 'newKittenController',
        controllerAs: 'newKittenCtrl',
        templateUrl: './newkitten/newkitten.html'
      })
      .when('/comments/:id', {
        controller: 'newCommentController',
        controllerAs: 'commentCtrl',
        templateUrl: './newcomment/newcomment.html'
      });
  }

})();
