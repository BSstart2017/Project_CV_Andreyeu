import React, {FC} from "react";

const Queen : FC<PropsType> = ({colorPiece}) => {
    return (
        <>
            { colorPiece === 'white' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/50/chess-3413424_1280.png' alt='no photo'/> }
            { colorPiece === 'black' && <img style={{maxHeight: '100px', maxWidth: '100px'}} src='https://cdn.pixabay.com/photo/2018/05/19/12/50/chess-3413427_1280.png' alt='no photo'/> }
        </>
    )
}

export default Queen;

type PropsType = {
    colorPiece: string
}