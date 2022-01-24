import React, {FC} from "react";

const King : FC<PropsType> = ({colorPiece}) => {
    return (
        <div>
            { colorPiece === 'white' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-3413412_960_720.png' alt='no photo'/> }
            { colorPiece === 'black' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-3413414_960_720.png' alt='no photo'/> }
        </div>
    )
}

export default King;

type PropsType = {
    colorPiece: string
}