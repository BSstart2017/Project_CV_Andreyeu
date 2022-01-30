import React, {FC} from 'react'
import Board from './Board'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const Chess: FC = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Board />
        </DndProvider>
    )
}

export default Chess

export const ItemTypes = {
    KNIGHT: 'knight',
    PAWN: 'pawn',
    QUEEN: 'queen',
    ROOK: 'rook',
    BISHOP: 'bishop',
    KING: 'king'
}