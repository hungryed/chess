
(function (root) {
  var Chess = root.Chess = (root.Chess || {})

  var Game = Chess.Game = function (numPlayers) {

  };

  var Board = Chess.Board = function ($boardDiv) {
    var tileDims = $boardDiv.height();

    var generateTiles = function () {
      var tileWhite = true;

      for (var rows = 0; rows < 8; rows++) {
        tileWhite = (rows % 2 == 0) ? true : false

        for (var cols = 0; cols < 8; cols++) {
          if (cols > 0) tileWhite = !tileWhite;

          var newTile = $("div").css({
              "height": tileDims,
              "width": tileDims,
              "background-color": (tileWhite ? "white" : "grey")
          });
        }
      }
    };
  }

})(this)
