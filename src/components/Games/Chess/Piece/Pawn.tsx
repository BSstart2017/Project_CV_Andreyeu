import React, {FC} from "react";

const Pawn : FC<PropsType> = ({colorPiece}) => {
    return (
        <div>
            { colorPiece === 'white' && <img src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png" alt="no photo"/>}
            { colorPiece === 'black' && <img src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413420_960_720.png" alt="no photo"/>}
        </div>
    )
}

export default Pawn;

type PropsType = {
    colorPiece: string
}