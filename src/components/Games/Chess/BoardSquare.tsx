import React, {FC, ReactNode, useMemo} from 'react'
import {useDrop} from 'react-dnd'
import {Square} from './Square'
import Overlay, {OverlayType} from './Overlay'
import {ItemTypes} from "./Chess";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/chess_reduser";
import {ItemPieceType} from "./Pieces/Pawn";
import {canMovePiece} from "./PosibleMovesPrieces/CanMovesPiece";

export const BoardSquare: FC<PropsType> = ({ x, y,piece,colorPiece,children}) => {

    const canMovePieceMemo = useMemo(() => canMovePiece, [])
    const dispatch = useDispatch()

    const orange = (x + y) % 2 === 1

    const [{isOver, canDrop}, drop] = useDrop(() => ({
            accept: [ItemTypes.KNIGHT, ItemTypes.PAWN, ItemTypes.ROOK,
                ItemTypes.QUEEN, ItemTypes.KING, ItemTypes.BISHOP],
            canDrop: (item) => canMovePieceMemo(x,y,item as ItemPieceType ),
            drop: (item) => dispatch(actions.setMoveChessSuccess(item as ItemPieceType, x, y, piece, colorPiece)),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            })
        }), [])

    return (
        <div ref={drop}>
            <Square orange={orange}>{children}</Square>
            {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover}/>}
            {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove}/>}
            {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover}/>}
        </div>
    )
}

export type PropsType = {
    x: number
    y: number
    children?: ReactNode
    colorPiece: string
    piece: string
}