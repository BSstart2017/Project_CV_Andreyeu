import { FC } from 'react'
import Knight  from './Pieces/Knight'
import Bishop from "./Pieces/Bishop";
import King from "./Pieces/King";
import Queen from "./Pieces/Queen";
import Rook from "./Pieces/Rook";
import Pawn from "./Pieces/Pawn";
import SpaceNull from "./Pieces/SpaceNull";

export const Piece: FC<PropsType> = ({ isKnight, isBishop, isKing, isQueen,
                                         isRook, isPawn, colorPiece, IsNullPrice}) => {
    return (
        <>
            {isBishop && <Bishop colorPiece={colorPiece}/>}
            {isKing && <King colorPiece={colorPiece}/>}
            {isQueen && <Queen colorPiece={colorPiece}/>}
            {isRook &&<Rook colorPiece={colorPiece}/>}
            {isPawn && <Pawn colorPiece={colorPiece}/>}
            {isKnight && <Knight colorPiece={colorPiece}/>}
            {IsNullPrice && <SpaceNull/>}
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
    IsNullPrice: boolean
    isPawn: boolean
}


