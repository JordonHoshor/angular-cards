(function() {

  angular.module('kittenCreator')
    .service('kittenMachine', kittenMachine);

  function kittenMachine() {
    const kittens = {};
    const allKittens = [{
      id: 1,
      name: 'Dexter',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/ab/56/16/ab561690164d143eb0f5e83f110ad76a.jpg',
      bio: 'I like to steal food from the humans. I take it from them every chance I get. Counter top, stove top, their plates when they are not looking. I am the best food thief.',
      votes: 0,
      comments: [{
        author: 'JH0',
        text: 'Cute Kitten'
      }]
    }];

    kittens.getAllKittens = () => {
      return allKittens;
    };

    kittens.getSingleKitten = (kittenID) => {
      return allKittens.filter((kitten) => {
        return kitten.id === parseInt(kittenID);
      });
    };

    kittens.addNewKitten = (kittenObj) => {
      const kittenID = allKittens[allKittens.length - 1].id;
      kittenObj.id = kittenID + 1;
      kittenObj.votes = 0;
      allKittens.push(kittenObj);
    };

    kittens.currentVotes = (kitten, votes) => {
      allKittens[kitten.id - 1].votes = parseInt(votes);
    };

    kittens.newComment = (kitten, comment) => {
      allKittens[kitten.id - 1].comments.push(comment);
    };

    return kittens;
  }

})();
