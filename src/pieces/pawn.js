import Piece from "./piece.js";
import { pawnMove } from "./utils/movetype.js";

class Pawn extends Piece {
  stringRep() {
    return this.color === "black" ? "♟" : "♙";
  }

  imgRep() {
    return this.color === "black" ? "img/pieces/bp" : "img/pieces/wp";
  }

  // assume black always starts at top of board
  forwardDirection() {
    return this.color === "black" ? 1 : -1;
  }

  isAtStart() {
    const row = this.location[0];
    return (
      (this.color === "white" && row === 6) ||
      (this.color === "black" && row === 1)
    );
  }

  validMoves() {
    return pawnMove(this);
  }
}

export default Pawn;
