import React, {FC} from "react";
import {withUseDragPiece} from "../../../../hoc/withUseDragPiece";

const PawnDrag : FC<PropsType> = React.memo(({colorPiece}) => {

    return (
        <>
                { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png" alt="noPhoto"/>}
                { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413420_960_720.png" alt="noPhoto"/>}
        </>
    )
})
const Pawn = withUseDragPiece(PawnDrag)
export default Pawn;

type PropsType = {
    x: number
    y: number
    colorPiece: string
    piece: string
}

export type ItemPieceType = {
    piece: string
    position:[number, number]
    colorPiece: string
}