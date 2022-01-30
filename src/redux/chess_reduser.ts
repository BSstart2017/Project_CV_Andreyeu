import {InferActionType} from "./store";
import {ItemPieceType} from "../components/Games/Chess/Pieces/Pawn";
import {movesPiece} from "../components/Games/Chess/PosibleMovesPrieces/MovesPiece";

const defaultState = {
    startChess: [
        {id: 1, colorPiece: 'black', piece: 'rook', position: [0, 0]},
        {id: 2, colorPiece: 'black', piece: 'knight', position: [1, 0]},
        {id: 3, colorPiece: 'black', piece: 'bishop', position: [2, 0]},
        {id: 4, colorPiece: 'black', piece: 'queen', position: [3, 0]},
        {id: 5, colorPiece: 'black', piece: 'king', position: [4, 0]},
        {id: 6, colorPiece: 'black', piece: 'bishop', position: [5, 0]},
        {id: 7, colorPiece: 'black', piece: 'knight', position: [6, 0]},
        {id: 8, colorPiece: 'black', piece: 'rook', position: [7, 0]},
        {id: 9, colorPiece: 'black', piece: 'pawn', position: [0, 1]},
        {id: 10, colorPiece: 'black', piece: 'pawn', position: [1, 1]},
        {id: 11, colorPiece: 'black', piece: 'pawn', position: [2, 1]},
        {id: 12, colorPiece: 'black', piece: 'pawn', position: [3, 1]},
        {id: 13, colorPiece: 'black', piece: 'pawn', position: [4, 1]},
        {id: 14, colorPiece: 'black', piece: 'pawn', position: [5, 1]},
        {id: 15, colorPiece: 'black', piece: 'pawn', position: [6, 1]},
        {id: 16, colorPiece: 'black', piece: 'pawn', position: [7, 1]},
        {id: 17, colorPiece: '', piece: '', position: [0, 2]},
        {id: 18, colorPiece: '', piece: '', position: [1, 2]},
        {id: 19, colorPiece: '', piece: '', position: [2, 2]},
        {id: 20, colorPiece: '', piece: '', position: [3, 2]},
        {id: 21, colorPiece: '', piece: '', position: [4, 2]},
        {id: 22, colorPiece: '', piece: '', position: [5, 2]},
        {id: 23, colorPiece: '', piece: '', position: [6, 2]},
        {id: 24, colorPiece: '', piece: '', position: [7, 2]},
        {id: 25, colorPiece: '', piece: '', position: [0, 3]},
        {id: 26, colorPiece: '', piece: '', position: [1, 3]},
        {id: 27, colorPiece: '', piece: '', position: [2, 3]},
        {id: 28, colorPiece: '', piece: '', position: [3, 3]},
        {id: 29, colorPiece: '', piece: '', position: [4, 3]},
        {id: 30, colorPiece: '', piece: '', position: [5, 3]},
        {id: 31, colorPiece: '', piece: '', position: [6, 3]},
        {id: 32, colorPiece: '', piece: '', position: [7, 3]},
        {id: 33, colorPiece: '', piece: '', position: [0, 4]},
        {id: 34, colorPiece: '', piece: '', position: [1, 4]},
        {id: 35, colorPiece: '', piece: '', position: [2, 4]},
        {id: 36, colorPiece: '', piece: '', position: [3, 4]},
        {id: 37, colorPiece: '', piece: '', position: [4, 4]},
        {id: 38, colorPiece: '', piece: '', position: [5, 4]},
        {id: 39, colorPiece: '', piece: '', position: [6, 4]},
        {id: 40, colorPiece: '', piece: '', position: [7, 4]},
        {id: 41, colorPiece: '', piece: '', position: [0, 5]},
        {id: 42, colorPiece: '', piece: '', position: [1, 5]},
        {id: 43, colorPiece: '', piece: '', position: [2, 5]},
        {id: 44, colorPiece: '', piece: '', position: [3, 5]},
        {id: 45, colorPiece: '', piece: '', position: [4, 5]},
        {id: 46, colorPiece: '', piece: '', position: [5, 5]},
        {id: 47, colorPiece: '', piece: '', position: [6, 5]},
        {id: 48, colorPiece: '', piece: '', position: [7, 5]},
        {id: 49, colorPiece: 'white', piece: 'pawn', position: [0, 6]},
        {id: 50, colorPiece: 'white', piece: 'pawn', position: [1, 6]},
        {id: 51, colorPiece: 'white', piece: 'pawn', position: [2, 6]},
        {id: 52, colorPiece: 'white', piece: 'pawn', position: [3, 6]},
        {id: 53, colorPiece: 'white', piece: 'pawn', position: [4, 6]},
        {id: 54, colorPiece: 'white', piece: 'pawn', position: [5, 6]},
        {id: 55, colorPiece: 'white', piece: 'pawn', position: [6, 6]},
        {id: 56, colorPiece: 'white', piece: 'pawn', position: [7, 6]},
        {id: 57, colorPiece: 'white', piece: 'rook', position: [0, 7]},
        {id: 58, colorPiece: 'white', piece: 'knight', position: [1, 7]},
        {id: 59, colorPiece: 'white', piece: 'bishop', position: [2, 7]},
        {id: 60, colorPiece: 'white', piece: 'queen', position: [3, 7]},
        {id: 61, colorPiece: 'white', piece: 'king', position: [4, 7]},
        {id: 62, colorPiece: 'white', piece: 'bishop', position: [5, 7]},
        {id: 63, colorPiece: 'white', piece: 'knight', position: [6, 7]},
        {id: 64, colorPiece: 'white', piece: 'rook', position: [7, 7]},
    ] as Array<StartChessTypes>
}


const chessReduser = (state = defaultState, action: ActionTypes): DefaultStateTypes => {
    switch (action.type) {
        case `chess/Aliaksandr_Andreyeu/Start_CHESS`:
            return {
                ...state,
                startChess: [...state.startChess, ...defaultState.startChess],
            };
        case `chess/Aliaksandr_Andreyeu/MoveCHESS`:
            const movePieceChess = movesPiece([...state.startChess],action.itemDrag, action.itemDrop)
            console.log(action.itemDrag, action.itemDrop)
            console.log(movePieceChess)
            return {
                ...state,
                startChess: [...state.startChess = movePieceChess],
            };
        default:
            return state;
    }
}

export const actions = {
    setStartChessSuccess: () => ({type: `chess/Aliaksandr_Andreyeu/Start_CHESS`} as const),
    setMoveChessSuccess: (itemDrag: ItemPieceType, x: number, y: number , piece: string, colorPiece: string) => ({type: `chess/Aliaksandr_Andreyeu/MoveCHESS`, itemDrag, itemDrop: {
        position: [x, y],
        piece: piece,
        colorPiece: colorPiece
        } as ItemPieceType} as const),
}

export default chessReduser;

type DefaultStateTypes = typeof defaultState
export type StartChessTypes = {
    id: number
    colorPiece: string,
    piece: string,
    position: [number,number]
}
type ActionTypes = InferActionType<typeof actions>

