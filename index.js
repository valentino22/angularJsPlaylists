var app = angular.module("playlistsApp", []);
app.controller("playlistCtrl", function ($scope, $http) {
  $http.get("playlists.json").then(function (response) {
    $scope.playlists = response.data;
  });
  $scope.selectedPlaylistId = 0;
  $scope.songs = ["Muse - Algorithm", "Queen - Bohemian Rhapsody"];

  $scope.addSong = function () {
    $scope.errorText = "";
    if (!$scope.newSongName) {
      return;
    }
    if ($scope.songs.indexOf($scope.newSongName) == -1) {
      $scope.songs.push($scope.newSongName);
    } else {
      $scope.errorText = "This song aready exists!";
    }
    $scope.newSongName = "";
  };

  $scope.addPlaylist = function () {
    $scope.errorTextPlaylist = "";
    if (!$scope.newPlaylistName) {
      return;
    }
    if (
      $scope.playlists.some(playlist => playlist.name == $scope.newPlaylistName)
    ) {
      $scope.errorTextPlaylist = "This playlist aready exists!";
    } else {
      $scope.playlists.push({
        name: $scope.newPlaylistName
      });
    }
    $scope.newPlaylistName = "";
  };

  $scope.removeSong = function (x) {
    $scope.errorText = "";
    $scope.songs.splice(x, 1);
  };

  $scope.setSelectedPlaylist = function (id) {
    $scope.selectedPlaylistId = id;
  };
});