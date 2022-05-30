// 체스 게임
class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      //Kings
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      //Queens
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      //Bishops
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),

      //Knight
      new Knight('White', 'B', 1),
      new Knight('White', 'G', 1),
      new Knight('White', 'B', 8),
      new Knight('White', 'G', 8),

      //Rook
      new Rook('Black', 'A', 1),
      new Rook('Black', 'H', 1),
      new Rook('Black', 'A', 8),
      new Rook('Black', 'H', 8),

      //Pawn
      new Pawn('Black', 'A', 2),
      new Pawn('Black', 'B', 2),
      new Pawn('Black', 'C', 2),
      new Pawn('Black', 'D', 2),
      new Pawn('Black', 'E', 2),
      new Pawn('Black', 'F', 2),
      new Pawn('Black', 'G', 2),
      new Pawn('Black', 'H', 2),

      new Pawn('White', 'A', 7),
      new Pawn('White', 'B', 7),
      new Pawn('White', 'C', 7),
      new Pawn('White', 'D', 7),
      new Pawn('White', 'E', 7),
      new Pawn('White', 'F', 7),
      new Pawn('White', 'G', 7),
      new Pawn('White', 'H', 7),

    ]

  }
}

// 체스 말
abstract class Piece {
  protected position: Position;
  constructor (
    private readonly color: Color,
    file: FileX,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;  // 상속받을 때 이것을 받으시 구현해야 함.
}

// 체스 말의 좌표 집합
class Position {
  constructor (
    private file: FileX,
    private rank: Rank
  ) { }

  distanceFrom(position:Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

class King extends Piece {
  canMoveTo(position: Position) {
      let distance = this.position.distanceFrom(position)
      return distance.rank < 2 && distance.file < 2;
  }

  
}
class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return (distance.rank > 0 && distance.rank < 9) && (distance.file > 0 && distance.file < 9);
  }
}
class Bishop extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.file === 1 && distance.rank === 1;
    
  }
}
class Knight extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    if(distance.rank === 2) {
      return distance.file === 1
    } else if (distance.rank === 1) {
      return distance.file === 2
    }
  }
}
class Rook extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    if(distance.rank === 0) {
      return distance.file > 0 && distance.file < 9;
    } else if (distance.file === 0) {
      return distance.rank > 0 && distance.rank < 9;
    }
  }
}
class Pawn extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 1;
  }
}

type Color = 'Black' | 'White'
type FileX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
