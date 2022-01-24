import React, {FC} from "react";

const King : FC<PropsType> = ({colorPiece}) => {
    return (
        <>
            { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-3413412_960_720.png' alt='no photo'/> }
            { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-3413414_960_720.png' alt='no photo'/> }
        </>
    )
}

export default King;

type PropsType = {
    colorPiece: string
}