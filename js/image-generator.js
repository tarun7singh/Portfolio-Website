function getPalette() {
    paletteReady = true;
    var vibrant = new Vibrant(document.querySelector("img")),
      swatches = vibrant.swatches(),
      listFragment = new DocumentFragment();
  
    if (swatches["DarkVibrant"]) {
      document.querySelector("img").style.filter =
        "drop-shadow(3px 3px 10px " + swatches["DarkVibrant"].getHex() + ")";
    }
  }
  
  function reload() {
    document.querySelector(".but1").className += " loading";
    document.querySelector("button").className += " disabled";
    fetch("https://api.tarunsingh.dev/image-generator/image", {
      cache: "no-cache"
    })
      .then(function(res) {
        if (!res.ok) {
          reload();
        }
        return res.blob();
      })
      .then(function(myBlob) {
        var urlCreator = window.URL || window.webkitURL;
        var objectURL = URL.createObjectURL(myBlob);
        document.querySelector("img").src = objectURL;
        document.querySelector(".but1").className = "but1";
        document.querySelector("button").className = "btn-lg";
        document.querySelector("img").addEventListener("load", function() {
          getPalette();
        });
      });
  }
  window.onload = function() {
    reload();
  };
  var paletteReady = false;
  document.querySelector("#reload").addEventListener("click", reload);
  