angular
  .module('app')
  .service('songs', function(fileLocations, albums) {

    var songPrice = '0.99';

    var songs = [
      /* --- Bill & Rose ---*/
      {
        album: "Bill & Rose",
        song: "50 Years Growing",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-50-years-growing.mp3",
        download: fileLocations.DOWNLOAD_LOCATION_billAndRose + "50-years-growing.mp3"
      },
      {
        album: "Bill & Rose",
        song: "Forever",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-forever.mp3",
        download: fileLocations.DOWNLOAD_LOCATION_billAndRose + "forever.mp3"
      },
      {
        album: "Bill & Rose",
        song: "In The Mirror",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-in-the-mirror.mp3"
      },
      {
        album: "Bill & Rose",
        song: "It Ain't Much",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-it-aint-much.mp3"
      },
      {
        album: "Bill & Rose",
        song: "Mama Spanked Me",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-mama-spanked-me.mp3"
      },
      {
        album: "Bill & Rose",
        song: "My Daddy",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-my-daddy.mp3"
      },
      {
        album: "Bill & Rose",
        song: "My Mama's Eyes",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-my-mamas-eyes.mp3"
      },
      {
        album: "Bill & Rose",
        song: "My Name Ain't Jesus",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-my-name-aint-jesus.mp3"
      },
      {
        album: "Bill & Rose",
        song: "Songs I Could Have Wrote",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-songs-i-could-have-wrote.mp3"
      },
      {
        album: "Bill & Rose",
        song: "Thank You",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-thank-you.mp3"
      },
      {
        album: "Bill & Rose",
        song: "Toy Soliders",
        preview: fileLocations.PREVIEW_LOCATION_billAndRose + "pre-toy-soldiers.mp3"
      },
      /* --- Bill & Rose ---*/
      /* --- Blooze ---*/
      {
        album: "Blooze",
        song: "A Little Bit Jumpy",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-a-little-bit-jumpy.mp3"
      },
      {
        album: "Blooze",
        song: "Don't Need The Blues",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-dont-need-the-blues.mp3"
      },
      {
        album: "Blooze",
        song: "Guardian Angel",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-guardian-angel.mp3"
      },
      {
        album: "Blooze",
        song: "Her Felony",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-her-felony.mp3"
      },
      {
        album: "Blooze",
        song: "Lord Oh Lord",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-lord-oh-lord.mp3"
      },
      {
        album: "Blooze",
        song: "More Than The Blues",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-more-than-the-blues.mp3"
      },
      {
        album: "Blooze",
        song: "Nightcandy",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-nightcandy.mp3"
      },
      {
        album: "Blooze",
        song: "Only Spirit I Know",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-only-spirit-i-know.mp3"
      },
      {
        album: "Blooze",
        song: "Red White Blues",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-red-white-blues.mp3"
      },
      {
        album: "Blooze",
        song: "Shot Down",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-shot-down.mp3"
      },
      {
        album: "Blooze",
        song: "Singlemalt State Of Mind",
        preview: fileLocations.PREVIEW_LOCATION_blooze + "pre-singlemalt-state-of-mind.mp3"
      },
      /* --- Blooze ---*/
      /* --- Cockeyed Alien ---*/
      {
        album: "Cockeyed Alien",
        song: "Afterglow",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-afterglow.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Brickwall",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-brickwall.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Cockeyed Alien",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-cockeyed-alien.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Doot Do Do",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-doot-do-do.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Gettin' It",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-gettin-it.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Outrageous",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-outrageous.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Sey Wut",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-sey-wut.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Slammin'",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-slammin.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Sunblind",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-sunblind.mp3"
      },
      {
        album: "Cockeyed Alien",
        song: "Sweetbabeez",
        preview: fileLocations.PREVIEW_LOCATION_cockeyedAlien + "pre-sweetbabeez.mp3"
      },
      /* --- Cockeyed Alien ---*/
      /* --- Countryfried ---*/
      {
        album: "Countryfried",
        song: "Cheatin On A Memory",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-cheatin-on-a-memory.mp3"
      },
      {
        album: "Countryfried",
        song: "Could I Love You More",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-could-i-love-you-more.mp3"
      },
      {
        album: "Countryfried",
        song: "I'll Forget About You",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-ill-forget-about-you.mp3"
      },
      {
        album: "Countryfried",
        song: "I'm Trusting You",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-im-trusting-you.mp3"
      },
      {
        album: "Countryfried",
        song: "Lovebugs",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-lovebugs.mp3"
      },
      {
        album: "Countryfried",
        song: "Rhythm Of Life",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-rhythm-of-life.mp3"
      },
      {
        album: "Countryfried",
        song: "She Rocked My Country",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-she-rocked-my-country.mp3"
      },
      {
        album: "Countryfried",
        song: "Singin To Myself",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-singin-to-myself.mp3"
      },
      {
        album: "Countryfried",
        song: "Travelin' Guitar Man",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-travelin-guitar-man.mp3"
      },
      {
        album: "Countryfried",
        song: "Walkin' My Heart",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-walkin-my-heart.mp3"
      },
      {
        album: "Countryfried",
        song: "You're Why I'm Still Here",
        preview: fileLocations.PREVIEW_LOCATION_countryfried + "pre-youre-why-im-still-here.mp3"
      },
      /* --- Countryfried ---*/
      /* --- Countryroots ---*/
      {
        album: "Countryroots",
        song: "A Bar With No Mirrors",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-a-bar-with-no-mirrors.mp3"
      },
      {
        album: "Countryroots",
        song: "Acoustic In The Dark",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-acoustic-in-the-dark.mp3"
      },
      {
        album: "Countryroots",
        song: "Honkytonk Daddy",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-honkytonk-daddy.mp3"
      },
      {
        album: "Countryroots",
        song: "Honkytonk Soul",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-honkytonk-soul.mp3"
      },
      {
        album: "Countryroots",
        song: "I'm Done",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-im-done.mp3"
      },
      {
        album: "Countryroots",
        song: "Livin' The Lyric",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-livin-the-lyric.mp3"
      },
      {
        album: "Countryroots",
        song: "More Than A Friend",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-more-than-a-friend.mp3"
      },
      {
        album: "Countryroots",
        song: "Open Your Arms",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-open-your-arms.mp3"
      },
      {
        album: "Countryroots",
        song: "Take The Love",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-take-the-love.mp3"
      },
      {
        album: "Countryroots",
        song: "Too Good For The Radio",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-too-good-for-the-radio.mp3"
      },
      {
        album: "Countryroots",
        song: "You Can't Dance",
        preview: fileLocations.PREVIEW_LOCATION_countryroots + "pre-you-cant-dance.mp3"
      },
      /* --- Countryroots ---*/
      /* --- Crush Them With Rock ---*/
      {
        album: "Crush Them With Rock",
        song: "6 Feet Away",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-6-feet-away.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Critique This",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-critique-this.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Crush Them With Rock",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-crush-them-with-rock.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "E.T. Blues",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-et-blues.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Happysong",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-happysong.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Human Flesh",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-human-flesh.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "I Wanna Be Prezident",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-i-wanna-be-prezident.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "My Mojo",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-my-mojo.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Sexasaurus",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-sexasaurus.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Sunset",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-sunset.mp3"
      },
      {
        album: "Crush Them With Rock",
        song: "Thang",
        preview: fileLocations.PREVIEW_LOCATION_crushThemWithRock + "pre-thang.mp3"
      },
      /* --- Crush Them With Rock ---*/
      /* --- Darwin's Rosary ---*/
      {
        album: "Darwin's Rosary",
        song: "Comesong",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-comesong.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Darwin's Rosary",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-darwins-rosary.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "For My Sanity",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-for-my-sanity.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "I Could Love You Better",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-i-could-love-you-better.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "iPad Xbox Blues",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-ipad-xbox-blues.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Meaner Than Evil",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-meaner-than-evil.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Moolah Be Praised",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-moolah-be-praised.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Over My Head",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-over-my-head.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Shoot For The Stars",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-shoot-for-the-stars.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Slide In Slide Out",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-slide-in-slide-out.mp3"
      },
      {
        album: "Darwin's Rosary",
        song: "Viva La Cerveza",
        preview: fileLocations.PREVIEW_LOCATION_darwinsRosary + "pre-viva-la-cerveza.mp3"
      },
      /* --- Darwin's Rosary ---*/
      /* --- I've Got a Taste for You --- */
      {
        album: "I've Got a Taste for You",
        song: "I've Got a Taste for You",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-ive-got-a-taste-for-you.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "Used to Be a Wannabe",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-wannabe.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "Let's Begat",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-lets-begat.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "Madly in Love",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-madly-in-love.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "All Covered in Willie",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-all-covered-in-willie.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "Didn't I Tell You",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-didnt-i-tell-you.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "I Am the Whisky",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-i-am-the-whisky.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "It All Starts Within You",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-it-all-starts-within-you.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "Edge of the Blacktop",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-edge-of-the-blacktop.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "Let Sleeping Truths Lie",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-sleeping-truths.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "P.J. & Millie",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-PJ-and-Millie.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "I know Stuff",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-i-know-stuff.mp3"
      },
      {
        album: "I've Got a Taste for You",
        song: "The Connection",
        preview: fileLocations.PREVIEW_LOCATION_tasteForYou + "pre-the-connection.mp3"
      },
      /* --- I've Got a Taste for You --- */
    ];

    this.assignAlbumInfo = function() {
      var temp = albums.albums;
      for(var i = 0; i < songs.length; i++) {
        for(var j = 0; j < temp.length; j++) {
            if(songs[i].album == temp[j].album) {
              songs[i].albumID = temp[j].albumID;
              songs[i].cover = temp[j].cover;
            }
        }
      }
    }();

    this.assignCartIDs = function() {
      for(var i = 0; i < songs.length; i++) {
        songs[i].cartID = i;
      }
    }();

    this.assignSongPrice = function() {
      for(var i = 0; i < songs.length; i++) {
        songs[i].price = songPrice;
      }
    }();

    this.songs = songs;
  });
