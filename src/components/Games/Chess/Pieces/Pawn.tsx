import React, {CSSProperties, FC} from "react";
import { DragPreviewImage, useDrag } from 'react-dnd'
import {ItemTypes} from "../Chess";

const pawnStyle: CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
}

const Pawn : FC<PropsType> = React.memo(({colorPiece,x,y}) => {

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.PAWN,
        item:{piece: ItemTypes.PAWN, position:[x,y], colorPiece: colorPiece},
        collect: (monitor) => ({isDragging: !!monitor.isDragging()})
    }), [])

    return (
        <>
            <DragPreviewImage connect={preview} src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png' />
            <div ref={drag} style={{...pawnStyle, opacity: isDragging ? 0.5 : 1}}>
                {x}:{y}
                { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png" alt="noPhoto"/>}
                { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413420_960_720.png" alt="noPhoto"/>}
            </div>

        </>
    )
})

export default Pawn;

type PropsType = {
    x: number
    y: number
    colorPiece: string
}

export type ItemPieceType = {
    piece: string
    position:[number, number]
    colorPiece: string
}