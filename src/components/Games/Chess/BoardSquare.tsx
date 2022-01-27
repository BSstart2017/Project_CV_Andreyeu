import {FC, ReactNode} from 'react'
import {useDrop} from 'react-dnd'
import {Square} from './Square'
import Overlay, {OverlayType} from './Overlay'
import {MovesKnight} from './PosibleMovesPrieces/MovesKnight'
import {ItemTypes} from "./Chess";


export const BoardSquare: FC<PropsType> = ({x, y, children, game}: PropsType) => {

    const [{isOver, canDrop}, drop] = useDrop(() => ({
            accept: ItemTypes.KNIGHT,
            canDrop: () => game.canMoveKnight(x, y),
            drop: () => game.moveKnight(x, y),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            })
        }), [game])

    const orange = (x + y) % 2 === 1

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
    game: MovesKnight
}