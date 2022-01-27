import React, {FC, useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {getChessSelector} from "../../../redux/Selectors/chess_selector";
import { BoardSquare } from './BoardSquare'
import { MovesKnight, Position } from './PosibleMovesPrieces/MovesKnight'
import { Piece } from './Piece'
import {Col, Row} from "antd";


const Board: FC<PropsType> = ({game}) => {

    const startChess = useSelector(getChessSelector)
    const [characters, updateCharacters] = useState(startChess);
    const [[knightX, knightY], setKnightPos] = useState<Position>(game.knightPosition)

    useEffect(() => game.observe(setKnightPos))

        return (
            <Row>
                {
                    characters.map((space, index)=> {
                        const x = index % 8
                        const y = Math.floor(index / 8)
                        return (
                            <Col span={3} key={space.id}>
                                <BoardSquare x={x} y={y} game={game}>
                                    <Piece isPawn={space.piece === 'pawn'} colorPiece={space.colorPiece}
                                           isQueen={space.piece === 'queen'} isBishop={space.piece === 'bishop'}
                                           isKing={space.piece === 'king'} isRook={space.piece === 'rook'}
                                           isKnight={space.piece === 'knight'}
                                    IsNullPrice={space.piece === ''}/>
                                </BoardSquare>
                            </Col>
                        )
                    })
                }
            </Row>

        )
}

export default Board

export type PropsType = {
    game: MovesKnight
}




/*
return (

            <Row>
                {characters.map((space) => (
                        <Col span={3}
                             style={{
                                 backgroundColor: space.colorSpace,
                                 minHeight: '100px',
                                 minWidth: '100px',
                                 textAlign: 'center'
                             }}>
                            {space.piece === 'bishop' && <Bishop colorPiece={space.colorPiece}/>}
                            {space.piece === 'king' && <King colorPiece={space.colorPiece}/>}
                            {space.piece === 'queen' && <Queen colorPiece={space.colorPiece}/>}
                            {space.piece === 'rook' && <Rook colorPiece={space.colorPiece}/>}
                            {space.piece === 'pawn' && <Pawn id={space.id} colorPiece={space.colorPiece}/>}
                            {space.piece === 'knight' && <Knight colorPiece={space.colorPiece}/>}
                            {space.piece === '' && <SpaceNull colorSpace={space.colorSpace}/>}
                        </Col>

                    )
                )}
            </Row>

    )
 */