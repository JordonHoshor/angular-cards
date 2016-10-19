(function() {

  angular.module('kittenCreator')
    .controller('kittenController', kittenController);

  kittenController.$inject = ['kittenMachine'];

  function kittenController(kittenMachine) {
    const target = this;
    target.kittens = kittenMachine.getAllKittens();
    target.filter = '-votes';

  target.thumbUp = (kittyID, votes) => {
    const kitty = kittenMachine.getAllKittens(kittyID)[0];
    kittenMachine.currentVotes(kitty, votes + 1);
    console.log(kitty, kittyID);
  };

  target.thumbDown = (kittenID, votes) => {
    const kitten = kittenMachine.getAllKittens(kittenID)[0];
    kittenMachine.currentVotes(kitten, votes - 1);
    console.log(kitten, kittenID);
  };

}

})();
