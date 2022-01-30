import {StartChessTypes} from "../../../../redux/chess_reduser";
import {ItemPieceType} from "../Pieces/Pawn";

export const movesPiece = (startChess: Array<StartChessTypes>, itemDrag: ItemPieceType, itemDrop: ItemPieceType): Array<StartChessTypes> => {
        return startChess.map(space => {
            if (space.position[0] === itemDrop.position[0] && space.position[1] === itemDrop.position[1]) {
                space.piece = itemDrag.piece
                space.colorPiece = itemDrag.colorPiece
                return space
            }else if (space.position[0] === itemDrag.position[0] && space.position[1] === itemDrag.position[1]) {
                space.piece = ''
                space.colorPiece = ''
                return space
            } else {
                return space
            }
        })
}

