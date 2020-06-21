(function(){
  "use strict"

  angular
    .module('playlistsApp')
    .component('songs', songsComponent());
    
    function songsComponent() {
      return {
        bindings: {
          songs: '=',
          playListName: '=',
          playListId: '='
        },
        controller: songsController,
        templateUrl: 'songs-tmpl.html'
      };
    }

    songsController.$inject = [
      '$scope'
    ]

    function songsController() {
          var ctrl = this;
          console.log(ctrl.playListName)
    };

})()