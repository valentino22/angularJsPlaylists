(function(){
  "use strict"

  angular
    .module('playlistsApp')
    .component('songs', songsComponent());
    
    function songsComponent() {
      return {
        controller: songsController,
        templateUrl: 'songs-tmpl.html'
      };
    }

    songsController.$inject = ["$scope"];

    function songsController($scope) {
      var ctrl = this;

      $scope.$on("playListSelected", function (event, id) {
        console.log(id);
        ctrl.playListId = id;
        ctrl.playListName = "Youtube";
        ctrl.songs = [
          "Muse - Algorithm",
          "Queen - Bohemian Rhapsody"
        ];
      });
    };

})()