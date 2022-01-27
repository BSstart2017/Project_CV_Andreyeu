import React, {CSSProperties, FC} from "react";
import { DragPreviewImage, useDrag } from 'react-dnd'
import {ItemTypes} from "../Chess";

const pawnStyle: CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
}

const Pawn : FC<PropsType> = ({colorPiece}) => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.PAWN,
        collect: (monitor) => ({isDragging: !!monitor.isDragging()})
    }), [])
    return (
        <>
            <DragPreviewImage connect={preview} src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png' />
            <div ref={drag} style={{...pawnStyle, opacity: isDragging ? 0.5 : 1}}>
                { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png" alt="no photo"/>}
                { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413420_960_720.png" alt="no photo"/>}
            </div>

        </>
    )
}

export default Pawn;

type PropsType = {
    colorPiece: string
}