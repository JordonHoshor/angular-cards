(function() {

  angular.module('kittenCreator')
    .controller('newKittenController', newKittenController);

  newKittenController.$inject = ['$location', 'kittenMachine'];

  function newKittenController($location, kittenMachine) {
    var target = this;
    target.newKitten = {};

    target.addKitten = (newKitten) => {
      kittenMachine.addNewKitten(target.newKitten);
      $location.path('/');
    };
  }

})();
