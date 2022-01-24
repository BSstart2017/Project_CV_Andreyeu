import React, {FC} from "react";

const Queen : FC<PropsType> = ({colorPiece}) => {
    return (
        <div>
            { colorPiece === 'white' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/50/chess-3413424_1280.png' alt='no photo'/> }
            { colorPiece === 'black' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/50/chess-3413427_1280.png' alt='no photo'/> }
        </div>
    )
}

export default Queen;

type PropsType = {
    colorPiece: string
}