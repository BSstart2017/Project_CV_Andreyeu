import React, { FC } from 'react'
import {withUseDragPiece} from "../../../../hoc/withUseDragPiece";


const KnightDrag: FC<PropsType> = ({colorPiece}) => {
    return (
        <>
                  { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/47/chess-white-horse-3413409__340.png' alt='noPhoto'/> }
                  { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-black-horse-3413410_1280.png' alt='noPhoto'/> }
        </>
    )
}

const Knight = withUseDragPiece(KnightDrag)
export default Knight

type PropsType = {
    colorPiece : string
    x: number
    y: number
    piece: string
}