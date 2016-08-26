angular
  .module('app')
  .service('albums', function(fileLocations) {

    var albumPrice = '9.99';

    var albums = [
      {
        album: "Bill & Rose",
        cover: fileLocations.COVER_LOCATION_billAndRose,
        desc: "Country love songs dedicated to rose and bill."
      },
      {
        album: "Blooze",
        cover: fileLocations.COVER_LOCATION_blooze,
        desc: "Multi-genre blues tunes with soulful guitar and sexy sax work. wrapped around powerful lyrics weaving through 11 songs of human therapy."
      },
      {
        album: "Cockeyed Alien",
        cover: fileLocations.COVER_LOCATION_cockeyedAlien,
        desc: "Guitars exist elsewhere in the universe too... blues rock mood altering aural discharges for the astral traveler in you."
      },
      {
        album: "Countryfried",
        cover: fileLocations.COVER_LOCATION_countryfried,
        desc: "Songs about blending music styles, singin' to no one, forgetting every day, florida love bugs, life and memories, loving more, ramblin' talent, trusting in faith, reasons for staying and being true to your heart, all packaged in 11 songs, countrystyle."
      },
      {
        album: "Countryroots",
        cover: fileLocations.COVER_LOCATION_countryroots,
        desc: "11 classic songs outside of nashville about a working girl, being lonely and lost, finding your father, giving up on love, reflecting inside, walkin' your talk, being too close to her, living a song, coming home and not caring about commercial radio."
      },
      {
        album: "Crush Them With Rock",
        cover: fileLocations.COVER_LOCATION_crushThemWithRock,
        desc: "Hot guitar work, scorching sax on 11 rock and blues songs about taking back human dignity, living for today, a presidential campaign, critics, mojo, E.T., sex hunting, playful carnality, being happy, what she does to you and our own flesh."
      },
      {
        album: "Darwin's Rosary",
        cover: fileLocations.COVER_LOCATION_darwinsRosary,
        desc: "The revolution of evolution evolves from rock. scorching social commentary, lurid sex and all backed by spine thumping grooves that will test any guitar hero."
      },
      {
        album: "I've Got a Taste for You",
        cover: fileLocations.COVER_LOCATION_tasteForYouCover,
        desc: "A bit of everything wrapped in one kickin' package... blues, rock, country and pop.",
      }
    ];

    this.assignAlbumInfo = function() {
      for(var i = 0; i < albums.length; i++) {
        albums[i].albumID = i;
        albums[i].price = albumPrice;
      }
    }();

    this.albums = albums;
  });
