import React, {FC} from "react";

const Bishop : FC<PropsType> = ({colorPiece}) => {
    return (
        <div>
            { colorPiece === 'white' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413422_1280.png' alt='no photo'/> }
            { colorPiece === 'black' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/49/chess-3413423_1280.png' alt='no photo'/> }
        </div>
    )
}

export default Bishop;

type PropsType = {
    colorPiece: string
}