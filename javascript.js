//Chess
//Classes:
// Game, Board, Player, Piece, Pieces (pawn, knight, rook, bishop, king, queen)

// javascript.js


(function (root) {
    var Chess = root.Chess = (root.Chess || {})

    var Game = Chess.Game = function (numPlayers) {
      var firstPlayersTurn = true;
      var pieceSelected = false;
      var boardArray = [];
      var boardDiv = new Chess.Board($("#chess-board"));

      //to switch turns: firstPlayersTurn = !firstPlayersTurn;
      //white goes first
      //check if game is over
      //if it's your turn, clickable = true
      //

      $(".tile").on("click", function () {

      });

      this.readPositions = function () {
        var positions = [];
        for (var row = 0; row < 8; row++) {
          for (var col = 0; col < 8; col++) {
            var content = boardArray[row][col];

            if (content !== undefined) {
              var pieceInfo = {};
              pieceInfo.type = content;
              pieceInfo.row = row;
              pieceInfo.col = col;

              positions.push(pieceInfo);
            }
          }

        }
        return positions;

      };

      this.start = function () {
        // this.boardArray = []

        for (var row = 0; row < 8; row++) {
          boardArray.push(new Array(8));
        };

        boardDiv.generateTiles();
        boardDiv.populateBoard(boardArray);
        boardDiv.updateBoard(this.readPositions(boardArray));
      };
    };

    var Board = Chess.Board = function ($boardDiv) {
      this.tileDims = ($boardDiv.height() / 8) - 10;
      this.symbols = {kingwhite: "&#9812;",
        queenwhite: "&#9813;",
        rookwhite: "&#9814;",
        bishopwhite: "&#9815;",
        knightwhite: "&#9816;",
        pawnwhite: "&#9817;",
        kingblack: "&#9818;",
        queenblack: "&#9819;",
        rookblack: "&#9820;",
        bishopblack: "&#9821;",
        knightblack: "&#9822;",
        pawnblack: "&#9823"};


      this.generateTiles = function () {
        var tileWhite = true;

        for (var rows = 0; rows < 8; rows++) {
          tileWhite = (rows % 2 === 0) ? true : false;

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
            newTile.attr('id', 'tile' + rows + '-' + cols);
            $boardDiv.append(newTile);

          }
        }
      };

      this.updateBoard = function (piecesInfo) {
        // every tile has class = "tile"
        //blank the board

        $(".tile").html("");
        // piecesInfo = [{type: "knightwhite", row:x, col:y}, {},{},...]
        for (var i = 0; i < piecesInfo.length; i++) {
          var piece = piecesInfo[i];
          var divId = "#tile" + piece.row + "-" + piece.col;
          var tile = $(divId);
          tile.html(this.symbols[piece.type]);
        }
        // i = 2
          // get row, col info; array[i].row, array[i].col
          // find the right div; var tile =  $("#" + row +"," + col)
          // BLANK the div; div.html("")
          // font color = array[i].color
          // decide syumbol based on array[i].type; tile.html("symbol")
      };

      this.populateBoard = function (boardArray) {

        //place the kings
        boardArray[0][3] = "kingblack";
        boardArray[7][3] = "kingwhite";

        //place the queens
        boardArray[0][4] = "queenblack";
        boardArray[7][4] = "queenwhite";

        //place the rooks
        boardArray[0][0] = "rookblack";
        boardArray[0][7] = "rookblack";
        boardArray[7][0] = "rookwhite";
        boardArray[7][7] = "rookwhite";

        //place the bishops
        boardArray[0][2] = "bishopblack";
        boardArray[0][5] = "bishopblack";
        boardArray[7][2] = "bishopwhite";
        boardArray[7][5] = "bishopwhite";

        //place the knights
        boardArray[0][1] = "knightblack";
        boardArray[0][6] = "knightblack";
        boardArray[7][1] = "knightwhite";
        boardArray[7][6] = "knightwhite";

        //place the pawns
        for (var col = 0; col < 8; col++) {
          boardArray[1][col] = "pawnblack";
          boardArray[6][col] = "pawnwhite";
        }

      };

    };

})(this);

$(document).ready(function () {
  var game = new Chess.Game();
  game.start();
  // var board = new Chess.Board($("#chess-board"));
  // board.generateTiles();
})
