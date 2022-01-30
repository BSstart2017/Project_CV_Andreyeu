import { FC } from 'react'
import Knight  from './Pieces/Knight'
import Bishop from "./Pieces/Bishop";
import King from "./Pieces/King";
import Queen from "./Pieces/Queen";
import Rook from "./Pieces/Rook";
import Pawn from "./Pieces/Pawn";

export const Piece: FC<PropsType> = ({x,y, isKnight, isBishop, isKing, isQueen,
                                         isRook, isPawn, colorPiece}) => {
    return (
        <>
            {isBishop && <Bishop x={x} y={y} colorPiece={colorPiece}/>}
            {isKing && <King x={x} y={y} colorPiece={colorPiece}/>}
            {isQueen && <Queen x={x} y={y} colorPiece={colorPiece}/>}
            {isRook &&<Rook x={x} y={y} colorPiece={colorPiece}/>}
            {isPawn && <Pawn x={x} y={y} colorPiece={colorPiece}/>}
            {isKnight && <Knight x={x} y={y} colorPiece={colorPiece}/>}
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
}


