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
      likes: 0
    }];

    kittens.getAllKittens = () => {
      return allKittens;
    };

    kittens.addNewKitten = (kittenObj) => {
      const kittenID = allKittens[allKittens.length - 1].id;
      kittenObj.id = kittenID + 1;
      kittenObj.likes = 0;
      allKittens.push(kittenObj);
    };
    return kittens;
  }

})();
