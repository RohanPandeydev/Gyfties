(function () {
  var new_window;
  var main_url = "https://gyfties.com/bookmark";
  // var main_url = "https://backend.gyfties.com/bookmark";

  window.bookmarklet = function () {
    try {
      var loc = window.location;
      var doc = window.document;
      var screenWidth = window.screen.width / 2;
      var screenHeight = window.screen.height / 2;
      var option = "top=" + screenHeight / 2 + ",left=" + screenWidth / 2 + ",width=" + screenWidth + ",height=" + screenHeight;

      new_window = window.open(main_url + "?u=" + encodeURIComponent(loc.href), doc.title, option);

      new_window.onload = function () {
        this.onbeforeunload = function () {
          console.log("trybookmark remove")
          doc.getElementById("trybookmark").remove()
          if (typeof scriptElem !== 'undefined') {
            console.log("scriptElem remove")
            // eslint-disable-next-line no-undef
            scriptElem.remove();
          }
        }
      }
    } catch (e) {
      // catches Chrome cross-origin errors
      if (e instanceof DOMException) {
        console.log(e)
      } else {
        throw e;
      }
    }
  }

  // auto calling
  window.bookmarklet();
}())
