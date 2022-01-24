import React, {FC} from "react";

const Knight : FC<PropsType> = ({colorPiece}) => {
    return (
        <div>
            { colorPiece === 'white' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/47/chess-white-horse-3413409__340.png' alt='no photo'/> }
            { colorPiece === 'black' && <img src='https://cdn.pixabay.com/photo/2018/05/19/12/48/chess-black-horse-3413410_1280.png' alt='no photo'/> }
        </div>
    )
}

export default Knight;

type PropsType = {
    colorPiece: string
}