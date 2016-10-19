(function() {

  angular.module('kittenCreator')
    .controller('kittenController', kittenController);

  kittenController.$inject = ['kittenMachine'];

  function kittenController(kittenMachine) {
    const target = this;
    target.kittens = kittenMachine.getAllKittens();
    target.filter = '-votes';
    target.collapsibleElements = [{
      title: ''
    }]

    target.thumbUp = (kittyID, votes) => {
      const kitty = kittenMachine.getSingleKitten(kittyID)[0];
      kittenMachine.currentVotes(kitty, votes + 1);
    };

    target.thumbDown = (kittenID, votes) => {
      const kitten = kittenMachine.getSingleKitten(kittenID)[0];
      kittenMachine.currentVotes(kitten, votes - 1);
    };

    target.createComment = (kittenID, comment) => {
      const cat = kittenMachine.getSingleKitten(kittenID)[0];
      kittenMachine.newComment(cat, comment);
      target.newCommentObj = {};
    };

  }

})();
