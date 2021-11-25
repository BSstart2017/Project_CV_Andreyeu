import React from "react"
import style from "./Paginator.module.css"
import cn from "classnames"

const Paginator: React.FC<PropsType> = ({totalUsers, pageCount, activePage, setCurrentPage, portionSize = 10 }) => {

        let pagesCount = Math.ceil(totalUsers/ pageCount)
        let pages : Array<number> = []

        for(let i=1; i <= pagesCount; i++){
          pages.push(i)
        }

        let portionCount = Math.ceil(pagesCount/ portionSize) 
        let [portionNumber, setPortionNumber] = React.useState(1)
        let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 
        let rightPortionPageNumber = portionNumber * portionSize

        return (
          <div>
            <div className={style.blockPaginator}>
            { portionNumber > 1 &&
              <button onClick={()=>{
                setPortionNumber(portionNumber-1)
              }}>Prev</button>
            }
            { 
              pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
              .map(p=> {
                return <span className={cn(activePage === p && style.activeStyle)} key={p}
                onClick={()=>{setCurrentPage(p)}}>{p}</span>
              } )
            }
             { portionCount > portionNumber && <button onClick={()=>{ setPortionNumber(portionNumber+1)}}>Next</button>
            }
            </div>
         </div>
        )
}

export default Paginator;


type PropsType = {
  totalUsers : number 
   pageCount: number
   activePage: number
   setCurrentPage: (pageNumber : number)=> void 
   portionSize? : number  
}