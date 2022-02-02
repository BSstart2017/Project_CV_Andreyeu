import React, {FC} from "react";
import {withUseDragPiece} from "../../../../hoc/withUseDragPiece";

const BishopDrag : FC<PropsType> = ({colorPiece}) => {
    return (
        <>
            { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413422_1280.png' alt='noPhoto'/> }
            { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413423_1280.png' alt='noPhoto'/> }
        </>
    )
}

const Bishop = withUseDragPiece(BishopDrag)
export default Bishop;

type PropsType = {
    colorPiece: string
    x: number
    y: number
    piece: string
}