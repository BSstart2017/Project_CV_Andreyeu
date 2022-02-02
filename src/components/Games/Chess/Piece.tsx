import { FC } from 'react'
import Knight  from './Pieces/Knight'
import Bishop from "./Pieces/Bishop";
import King from "./Pieces/King";
import Queen from "./Pieces/Queen";
import Rook from "./Pieces/Rook";
import Pawn from "./Pieces/Pawn";

export const Piece: FC<PropsType> = ({x,y, isKnight, isBishop, isKing, isQueen,
                                         isRook, isPawn, colorPiece, piece}) => {
    return (
        <>
            {isBishop && <Bishop x={x} y={y} colorPiece={colorPiece} piece={piece}/>}
            {isKing && <King x={x} y={y} colorPiece={colorPiece}  piece={piece}/>}
            {isQueen && <Queen x={x} y={y} colorPiece={colorPiece}  piece={piece}/>}
            {isRook &&<Rook x={x} y={y} colorPiece={colorPiece}  piece={piece}/>}
            {isPawn && <Pawn x={x} y={y} colorPiece={colorPiece} piece={piece}/>}
            {isKnight && <Knight x={x} y={y} colorPiece={colorPiece} piece={piece}/>}
        </>
    )
}

export type PropsType = {
    colorPiece: string
    isKnight: boolean
    isBishop: boolean
    isKing: boolean
    isQueen: boolean
    isRook: boolean
    isPawn: boolean
    x: number
    y: number
    piece: string
}


