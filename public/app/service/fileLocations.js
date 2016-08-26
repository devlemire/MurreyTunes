angular
  .module('app')
  .service('fileLocations', function() {

    var PREVIEW_LOCATION = "./media/mp3/Chevy-Ford-Band/preview/";
    var COVER_LOCATION = "./media/covers/";
    var DOWNLOAD_LOCATION = "./media/";

    this.PREVIEW_LOCATION_billAndRose = PREVIEW_LOCATION + "bill-and-rose/";
    this.PREVIEW_LOCATION_blooze = PREVIEW_LOCATION + "blooze/";
    this.PREVIEW_LOCATION_cockeyedAlien = PREVIEW_LOCATION + "cockeyed-alien/";
    this.PREVIEW_LOCATION_countryroots = PREVIEW_LOCATION + "/countryroots/";
    this.PREVIEW_LOCATION_countryfried = PREVIEW_LOCATION + "/countryfried/";
    this.PREVIEW_LOCATION_crushThemWithRock = PREVIEW_LOCATION + "/crush-them-with-rock/";
    this.PREVIEW_LOCATION_darwinsRosary = PREVIEW_LOCATION + "/darwins-rosary/";
    this.PREVIEW_LOCATION_tasteForYou = PREVIEW_LOCATION + "ive-got-a-taste-for-you/";

    this.COVER_LOCATION_billAndRose = COVER_LOCATION + "bill-and-rose.jpg";
    this.COVER_LOCATION_blooze = COVER_LOCATION + "blooze.jpg";
    this.COVER_LOCATION_cockeyedAlien = COVER_LOCATION + "cockeyed-alien.jpg";
    this.COVER_LOCATION_countryroots = COVER_LOCATION + "countryroots.jpg";
    this.COVER_LOCATION_countryfried = COVER_LOCATION + "countryfried.jpg";
    this.COVER_LOCATION_crushThemWithRock = COVER_LOCATION + "crush-them-with-rock.jpg";
    this.COVER_LOCATION_darwinsRosary = COVER_LOCATION + "darwins-rosary.jpg";
    this.COVER_LOCATION_tasteForYouCover = COVER_LOCATION + "i've-got-a-taste-for-you.jpg";

    this.DOWNLOAD_LOCATION_billAndRose = DOWNLOAD_LOCATION + "bill-and-rose/";
  });
