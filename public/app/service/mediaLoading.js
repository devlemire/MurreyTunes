angular
  .module('app')
  .service('mediaLoading', function(albums, songs) {

    this.albums = albums.albums;
    this.songs = songs.songs;

    this.getAlbums = function() {
      return this.albums;
    };

    this.getSpecificAlbum = function(id) {
      var rAlbum;

      for(var i = 0; i < this.albums.length; i++) {
        for(var j in this.albums[i]) {
          if(this.albums[i][j] == id) {
            rAlbum = this.albums[i];
          }
        }
      }

      return rAlbum;
    };

    this.getSongs = function() {
      return this.songs;
    };

    this.getSpecificSongs = function(id) {
      var rSongs = [];
      for(var i = 0; i < this.songs.length; i++) {
        for(var j in this.songs[i]) {
          if(j == 'albumID') {
            if(this.songs[i][j] == id) {
              rSongs.push(this.songs[i]);
            }
          }
        }
      }

      return rSongs;
    };
  });
