(function() {

  angular.module('kittenCreator')
    .controller('thumbController', thumbController);

  thumbController.$inject = ['kittenMachine'];

  function thumbController(kittenMachine) {
    const target = this;

    // target.kittens = kittenMachine.getAllKittens();

    target.thumbUp = (kittyID, votes) => {
      const kitty = kittenMachine.getSingleKitten(kittyID)[0];
      kittenMachine.currentVotes(kitty, votes + 1);
    };

    target.thumbDown = (kittenID, votes) => {
      const kitten = kittenMachine.getSingleKitten(kittenID)[0];
      kittenMachine.currentVotes(kitten, votes - 1);
    };

  }

})();
