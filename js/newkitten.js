(function() {

  angular.module('kittenCreator')
    .controller('newKittenController', newKittenController);

  newKittenController.$inject = ['$location', 'kittenMachine'];

  function newKittenController($location, kittenMachine) {
    this.newKitten = {};

    this.addKitten = (newKitten) => {
      kittenMachine.addNewKitten(this.newKitten);
      $location.path('/');
    };
  }

})();
