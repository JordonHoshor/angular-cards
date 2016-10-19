(function() {

  angular.module('kittenCreator')
    .controller('newCommentController', newCommentController);

  newCommentController.$inject = ['$location', '$routeParams', 'kittenMachine'];

  function newCommentController($location, $routeParams, kittenMachine) {
    const target = this;
    let { id } = $routeParams;
    target.singleKitten = kittenMachine.getSingleKitten(id)[0];
    target.collapsibleElements = [{
      title: ''
    }];

    target.createComment = (id, commentObj) => {
      const kitten = target.singleKitten;
      kittenMachine.newComment(kitten, commentObj);
      target.newCommentObj = {};
      $location.path('/');
    };
  }

})();
