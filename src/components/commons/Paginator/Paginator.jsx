import React from "react";
import style from "./Paginator.module.css";

const Paginator = ({totalUsers, pageCount, activePage, setCurrentPage }) => {

        let pagesCount = Math.ceil(totalUsers/ pageCount)
        let pages = []

        for(let i=1; i <= pagesCount; i++){
          pages.push(i)
        }
        
        return (
          <div>
            <div className={style.blockPaginator}>
            { 
              pages.map(p=> {
                return <span className={activePage === p && style.activeStyle} key={p}
                onClick={()=>{setCurrentPage(p)}}>{p}</span>
              } )
            }
            </div>
         </div>
        )
}

export default Paginator;
