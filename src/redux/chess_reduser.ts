import {InferActionType} from "./store";

const defaultState = {
  startChess: [
    {id: 1, colorSpace: 'white', colorPiece: 'black', piece: 'rook', row: 8, col: 'A'},
    {id: 2, colorSpace: 'orange', colorPiece: 'black', piece: 'knight', row: 8, col: 'B'},
    {id: 3, colorSpace: 'white', colorPiece: 'black', piece: 'bishop', row: 8, col: 'C'},
    {id: 4, colorSpace: 'orange', colorPiece: 'black', piece: 'queen', row: 8, col: 'D'},
    {id: 5, colorSpace: 'white', colorPiece: 'black', piece: 'king', row: 8, col: 'E'},
    {id: 6, colorSpace: 'orange', colorPiece: 'black', piece: 'bishop', row: 8, col: 'F'},
    {id: 7, colorSpace: 'white', colorPiece: 'black', piece: 'knight', row: 8, col: 'G'},
    {id: 8, colorSpace: 'orange', colorPiece: 'black', piece: 'rook', row: 8, col: 'H'},
    {id: 9, colorSpace: 'orange', colorPiece: 'black', piece: 'pawn', row: 7, col: 'A'},
    {id: 10, colorSpace: 'white', colorPiece: 'black', piece: 'pawn', row: 7, col: 'B'},
    {id: 11, colorSpace: 'orange', colorPiece: 'black', piece: 'pawn', row: 7, col: 'C'},
    {id: 12, colorSpace: 'white', colorPiece: 'black', piece: 'pawn', row: 7, col: 'D'},
    {id: 13, colorSpace: 'orange', colorPiece: 'black', piece: 'pawn', row: 7, col: 'E'},
    {id: 14, colorSpace: 'white', colorPiece: 'black', piece: 'pawn', row: 7, col: 'F'},
    {id: 15, colorSpace: 'orange', colorPiece: 'black', piece: 'pawn', row: 7, col: 'G'},
    {id: 16, colorSpace: 'white', colorPiece: 'black', piece: 'pawn', row: 7, col: 'H'},
    {id: 17, colorSpace: 'white', colorPiece: '', piece: '', row: 6, col: 'A'},
    {id: 18, colorSpace: 'orange', colorPiece: '', piece: '', row: 6, col: 'B'},
    {id: 19, colorSpace: 'white', colorPiece: '', piece: '', row: 6, col: 'C'},
    {id: 20, colorSpace: 'orange', colorPiece: '', piece: '', row: 6, col: 'D'},
    {id: 21, colorSpace: 'white', colorPiece: '', piece: '', row: 6, col: 'E'},
    {id: 22, colorSpace: 'orange', colorPiece: '', piece: '', row: 6, col: 'F'},
    {id: 23, colorSpace: 'white', colorPiece: '', piece: '', row: 6, col: 'G'},
    {id: 24, colorSpace: 'orange', colorPiece: '', piece: '', row: 6, col: 'H'},
    {id: 25, colorSpace: 'orange', colorPiece: '', piece: '', row: 5, col: 'A'},
    {id: 26, colorSpace: 'white', colorPiece: '', piece: '', row: 5, col: 'B'},
    {id: 27, colorSpace: 'orange', colorPiece: '', piece: '', row: 5, col: 'C'},
    {id: 28, colorSpace: 'white', colorPiece: '', piece: '', row: 5, col: 'D'},
    {id: 29, colorSpace: 'orange', colorPiece: '', piece: '', row: 5, col: 'E'},
    {id: 30, colorSpace: 'white', colorPiece: '', piece: '', row: 5, col: 'F'},
    {id: 31, colorSpace: 'orange', colorPiece: '', piece: '', row: 5, col: 'G'},
    {id: 32, colorSpace: 'white', colorPiece: '', piece: '', row: 5, col: 'H'},
    {id: 33, colorSpace: 'white', colorPiece: '', piece: '', row: 4, col: 'A'},
    {id: 34, colorSpace: 'orange', colorPiece: '', piece: '', row: 4, col: 'B'},
    {id: 35, colorSpace: 'white', colorPiece: '', piece: '', row: 4, col: 'C'},
    {id: 36, colorSpace: 'orange', colorPiece: '', piece: '', row: 4, col: 'D'},
    {id: 37, colorSpace: 'white', colorPiece: '', piece: '', row: 4, col: 'E'},
    {id: 38, colorSpace: 'orange', colorPiece: '', piece: '', row: 4, col: 'F'},
    {id: 39, colorSpace: 'white', colorPiece: '', piece: '', row: 4, col: 'G'},
    {id: 40, colorSpace: 'orange', colorPiece: '', piece: '', row: 4, col: 'H'},
    {id: 41, colorSpace: 'orange', colorPiece: '', piece: '', row: 3, col: 'A'},
    {id: 42, colorSpace: 'white', colorPiece: '', piece: '', row: 3, col: 'B'},
    {id: 43, colorSpace: 'orange', colorPiece: '', piece: '', row: 3, col: 'C'},
    {id: 44, colorSpace: 'white', colorPiece: '', piece: '', row: 3, col: 'D'},
    {id: 45, colorSpace: 'orange', colorPiece: '', piece: '', row: 3, col: 'E'},
    {id: 46, colorSpace: 'white', colorPiece: '', piece: '', row: 3, col: 'F'},
    {id: 47, colorSpace: 'orange', colorPiece: '', piece: '', row: 3, col: 'G'},
    {id: 48, colorSpace: 'white', colorPiece: '', piece: '', row: 3, col: 'H'},
    {id: 49, colorSpace: 'white', colorPiece: 'white', piece: 'pawn', row: 2, col: 'A'},
    {id: 50, colorSpace: 'orange', colorPiece: 'white', piece: 'pawn', row: 2, col: 'B'},
    {id: 51, colorSpace: 'white', colorPiece: 'white', piece: 'pawn', row: 2, col: 'C'},
    {id: 52, colorSpace: 'orange', colorPiece: 'white', piece: 'pawn', row: 2, col: 'D'},
    {id: 53, colorSpace: 'white', colorPiece: 'white', piece: 'pawn', row: 2, col: 'E'},
    {id: 54, colorSpace: 'orange', colorPiece: 'white', piece: 'pawn', row: 2, col: 'F'},
    {id: 55, colorSpace: 'white', colorPiece: 'white', piece: 'pawn', row: 2, col: 'G'},
    {id: 56, colorSpace: 'orange', colorPiece: 'white', piece: 'pawn', row: 2, col: 'H'},
    {id: 57, colorSpace: 'orange', colorPiece: 'white', piece: 'rook', row: 1, col: 'A'},
    {id: 58, colorSpace: 'white', colorPiece: 'white', piece: 'knight', row: 1, col: 'B'},
    {id: 59, colorSpace: 'orange', colorPiece: 'white', piece: 'bishop', row: 1, col: 'C'},
    {id: 60, colorSpace: 'white', colorPiece: 'white', piece: 'queen', row: 1, col: 'D'},
    {id: 61, colorSpace: 'orange', colorPiece: 'white', piece: 'king', row: 1, col: 'E'},
    {id: 62, colorSpace: 'white', colorPiece: 'white', piece: 'bishop', row: 1, col: 'F'},
    {id: 63, colorSpace: 'orange', colorPiece: 'white', piece: 'knight', row: 1, col: 'G'},
    {id: 64, colorSpace: 'white', colorPiece: 'white', piece: 'rook', row: 1, col: 'H'},
  ] as Array<StartChessTypes>,

};


const chessReduser = (state = defaultState, action : ActionTypes) : DefaultStateTypes => {
  switch (action.type) {
    case `game/Sergey_Suborov/CHANGE_CHESS`:

      return {
        ...state,
        startChess: [...state.startChess],
      };
    default:
      return state;
  }
};

export const actions = {
  setAddPostSuccess: () => ({type: `game/Sergey_Suborov/CHANGE_CHESS`} as const),

}

export default chessReduser;



type DefaultStateTypes = typeof defaultState
export type StartChessTypes =  {
  id: number
  colorSpace: string,
  colorPiece: string,
  piece: string,
  row: number,
  col: string
}

type ActionTypes = InferActionType<typeof actions>

