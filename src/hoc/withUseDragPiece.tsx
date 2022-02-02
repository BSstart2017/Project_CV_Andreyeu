import React, {CSSProperties} from "react";
import {DragPreviewImage, useDrag} from "react-dnd";

const pawnStyle: CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
}

export function withUseDragPiece<CP>(Component : React.ComponentType<CP>){

    const DragComponent: React.FC<PropsType> = (props:PropsType) => {

       let {x,y,colorPiece, piece} = props
        const [{ isDragging }, drag, preview] = useDrag(() => ({
            type: piece,
            item:{piece: piece, position:[x,y], colorPiece: colorPiece},
            collect: (monitor) => ({isDragging: monitor.isDragging()})
        }), [x,y])


        return (
            <>
            <DragPreviewImage connect={preview} src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png' />
            <div ref={drag} style={{...pawnStyle, opacity: isDragging ? 0.5 : 1}}>
                {/* @ts-ignore*/}
                <Component  {...props as PropsType}/>
            </div>
        </>
        )
    }
    return DragComponent
}

type PropsType = {
    x: number
    y: number
    colorPiece: string
    piece: string
}