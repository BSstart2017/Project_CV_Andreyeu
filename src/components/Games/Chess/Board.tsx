import React, {FC} from "react";
import {useSelector} from "react-redux";
import {getChessSelector} from "../../../redux/Selectors/chess_selector";
import { BoardSquare } from './BoardSquare'
import { Piece } from './Piece'
import {Col, Row} from "antd";

const Board: FC = () => {

    const startChess = useSelector(getChessSelector)

        return (
            <Row>
                {
                    startChess.map((space, index)=> {
                        const x = index % 8
                        const y = Math.floor(index / 8)
                        return (
                            <Col span={3} key={space.id}>
                                <BoardSquare x={x} y={y} piece={space.piece} colorPiece={space.colorPiece}>
                                    <Piece x={x} y={y} isPawn={space.piece === 'pawn'} colorPiece={space.colorPiece}
                                           isQueen={space.piece === 'queen'} isBishop={space.piece === 'bishop'}
                                           isKing={space.piece === 'king'} isRook={space.piece === 'rook'}
                                           isKnight={space.piece === 'knight'}/>
                                </BoardSquare>
                            </Col>
                        )
                    })
                }
            </Row>
        )
}

export default Board



