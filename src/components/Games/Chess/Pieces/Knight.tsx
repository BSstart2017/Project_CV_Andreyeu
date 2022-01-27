import React, { CSSProperties, FC } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import {ItemTypes} from "../Chess";

const knightStyle: CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
}

const Knight: FC<PropsType> = ({colorPiece}) => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
            type: ItemTypes.KNIGHT,
            collect: (monitor) => ({isDragging: !!monitor.isDragging()})
        }), [])

    return (
        <>
            <DragPreviewImage connect={preview} src='https://cdn.pixabay.com/photo/2018/05/19/12/47/chess-white-horse-3413409__340.png' />
            <div ref={drag} style={{...knightStyle, opacity: isDragging ? 0.5 : 1}}>
                  { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/47/chess-white-horse-3413409__340.png' alt='no photo'/> }
                  { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-black-horse-3413410_1280.png' alt='no photo'/> }
            </div>
        </>
    )
}

export default Knight

type PropsType = {
    colorPiece : string
}