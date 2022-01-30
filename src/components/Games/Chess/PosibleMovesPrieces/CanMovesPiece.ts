import {ItemPieceType} from "../Pieces/Pawn";

export const canMovePiece = (toX: number, toY: number, item: ItemPieceType):boolean => {

    let dx = toX - item.position[0]
    let dy = toY - item.position[1]

    switch (item.piece ) {
        case 'pawn':
            return (
                (Math.abs(dx) === 0 && (Math.abs(dy) === 2 || Math.abs(dy) === 1)  && dy>0 && item.colorPiece === 'black') ||
                (Math.abs(dx) === 0 && (Math.abs(dy) === 2 || Math.abs(dy) === 1)  && dy<0 && item.colorPiece === 'white')
            )
        case 'knight':
            return (
                (((Math.abs(dx) === 2 && Math.abs(dy) === 1) && item.colorPiece === 'black') ||
                ((Math.abs(dx) === 1 && Math.abs(dy) === 2) && item.colorPiece === 'black')) ||
                (((Math.abs(dx) === 2 && Math.abs(dy) === 1) && item.colorPiece === 'white') ||
                ((Math.abs(dx) === 1 && Math.abs(dy) === 2) && item.colorPiece === 'white'))
            )
        default: return false
    }
}

