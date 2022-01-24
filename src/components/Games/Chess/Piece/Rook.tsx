import React, {FC} from "react";

const Rook : FC<PropsType> = ({colorPiece}) => {
    return (
        <>
            { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-3413415_1280.png' alt='no photo'/> }
            { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413419_1280.png' alt='no photo'/> }
        </>
    )
}
export  default Rook;

type PropsType = {
    colorPiece: string
}