import { UserResponseType } from "../../api/users-api"


export const updateObjectInArray = (items : Array<UserResponseType>, itemId : number, objectPropsName: any, newObjectProps : {}) => 
items.map((el : any)=>el[objectPropsName]===itemId ? {...el, ...newObjectProps} : el)
