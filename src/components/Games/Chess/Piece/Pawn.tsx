import React, {FC} from "react";

const Pawn : FC<PropsType> = ({colorPiece}) => {
    return (
        <>
            { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413417_1280.png" alt="no photo"/>}
            { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src="https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413420_960_720.png" alt="no photo"/>}
        </>
    )
}

export default Pawn;

type PropsType = {
    colorPiece: string
}