import React, {FC} from "react";
import {Row} from "antd";
import {useSelector} from "react-redux";
import {getChessSelector} from "../../../redux/Selectors/chess_selector";
import Space from "./Space";

const ChessBoard : FC = () => {
    const startChess = useSelector(getChessSelector)

    return (
            <Row>
                {
                    startChess.map(space => (
                        <Space id={space.id} colorSpace={space.colorSpace} colorPiece={space.colorPiece}
                        piece={space.piece} col={space.col} row={space.row} key={space.id} />
                      ))
                }
            </Row>
    )
}

export default ChessBoard;