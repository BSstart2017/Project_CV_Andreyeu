import React from "react";
import style from "./Users.module.css";
import userDefaultIg from './../../assets/images/userDefault.jpg';

const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsers/ props.pageCount)
        let pages = []

        for(let i=1; i <= pagesCount; i++){
          pages.push(i)
        }
        
        return (
          <div>
            <div>
            { 
              pages.map(p=> {
                return <span className={Number(props.activePage) === p && style.activeStyle} 
                onClick={()=>{props.setCurrentPage(p)}}>{p}</span>
              } )
            }
            </div>
            
            {props.users.map(el => <div className={style.container} key={el.id}>
                <div className={style.leftBlock}>
                  <img className={style.photoAva} src={el.photos.small != null ? el.photos.small : userDefaultIg} alt="noPhoto" />
                  {el.followed ? <button onClick={() => {props.unfollow(el.id)}}>Follow</button>
                  : <button onClick={() => {props.follow(el.id)}}>Unfollow</button>}
                </div>
                <div className={style.rightBlock}>
                  <div>
                    <div>My name is {el.name}</div>
                    <div>Status: {el.status}</div>
                  </div>
                  <div>
                    <div>I am from {'el.location.country'}</div>
                    <div>My love city is {'el.location.city'}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
}

export default Users;
