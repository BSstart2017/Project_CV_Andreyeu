import React, {FC, useMemo} from 'react'
import Board from './Board'
import {MovesKnight} from './PosibleMovesPrieces/MovesKnight'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";


const Chess: FC = () => {
    const game = useMemo(() => new MovesKnight(), [])

    return (
        <DndProvider backend={HTML5Backend}>
            <Board game={game}/>
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