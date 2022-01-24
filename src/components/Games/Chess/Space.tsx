import React, {FC} from "react";
import {StartChessTypes} from "../../../redux/chess_reduser";
import {Col} from "antd";
import Bishop from "./Piece/Bishop";
import Knight from "./Piece/Knight";
import Pawn from "./Piece/Pawn";
import Rook from "./Piece/Rook";
import Queen from "./Piece/Queen";
import King from "./Piece/King";

const Space : FC<StartChessTypes> = ({id, colorSpace, colorPiece,
                                         piece, col, row}) => {
    return (
        <Col span={3} style={{backgroundColor: colorSpace, minHeight: '100px', minWidth: '100px'}}>
            <img />
            {piece === 'bishop' && <Bishop colorPiece={colorPiece} />}
            {piece === 'king' && <King colorPiece={colorPiece} />}
            {piece === 'queen' && <Queen colorPiece={colorPiece} />}
            {piece === 'rook' && <Rook colorPiece={colorPiece} />}
            {piece === 'pawn' && <Pawn colorPiece={colorPiece} />}
            {piece === 'knight' && <Knight colorPiece={colorPiece} />}
        </Col>
    )
}

export default Space