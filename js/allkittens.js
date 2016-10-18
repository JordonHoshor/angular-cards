(function() {

  angular.module('kittenCreator')
    .controller('kittenController', kittenController);

  kittenController.$inject = ['kittenMachine'];

  function kittenController(kittenMachine) {
    this.kittens = kittenMachine.getAllKittens();
  }

})();
