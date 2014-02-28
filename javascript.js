//Chess
//Classes:
// Game, Board, Player, Piece, Pieces (pawn, knight, rook, bishop, king, queen)

// javascript.js


(function (root) {
    var Chess = root.Chess = (root.Chess || {})

    var Game = Chess.Game = function (numPlayers) {

    };

    var Board = Chess.Board = function ($boardDiv) {
      this.tileDims = ($boardDiv.height() / 8) - 10;
      // this.symbols = {knightwhite : blah, knightblack: bleh, ...}

      this.generateTiles = function () {
        var tileWhite = true;

        for (var rows = 0; rows < 8; rows++) {
          tileWhite = (rows % 2 == 0) ? true : false

          for (var cols = 0; cols < 8; cols++) {
            if (cols > 0) tileWhite = !tileWhite;

            var newTile = $("<div>").css({
              "height": this.tileDims,
              "width": this.tileDims,
              "background-color": (tileWhite ? "blue" : "skyblue"),
              "float": "left",
              "border": "1px solid black",
              "padding": 0,
              "margin": 0
            });
            newTile.addClass("tile");
            newTile.attr('id', rows + ',' + cols);
            $boardDiv.append(newTile);

          }
        }
      };

      this.updateBoard = function (piecesInfo) {
        // every tile has class = "tile"
        //blank the board
        $(".tile").html("");

        // piecesInfo = [{type: "knight", color: "white", row:x, col:y}, {},{},...]

        for (var i = 0; i < piecesInfo.length; i++) {
          var piece = piecesInfo[i]
          divId = "#" + piece.row + "," + piece.col
          tile = $(divId)
          tile.html(this.symbols[piece.type + piece.color])
        }
        // i = 2
          // get row, col info; array[i].row, array[i].col
          // find the right div; var tile =  $("#" + row +"," + col)
          // BLANK the div; div.html("")
          // font color = array[i].color
          // decide syumbol based on array[i].type; tile.html("symbol")
      };

    }

})(this);

$(document).ready(function () {
  var board = new Chess.Board($("#chess-board"));
  board.generateTiles();
});
