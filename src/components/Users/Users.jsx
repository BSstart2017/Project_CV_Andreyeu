import React from "react";
import style from "./Users.module.css";
import userDefaultIg from './../../assets/images/userDefault.jpg';
import { NavLink } from "react-router-dom";

const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsers/ props.pageCount)
        let pages = []

        for(let i=1; i <= pagesCount; i++){
          pages.push(i)
        }
        
        return (
          <div>
            <div className={style.blockPagimation}>
            { 
              pages.map(p=> {
                return <span className={props.activePage === p && style.activeStyle} 
                onClick={()=>{props.setCurrentPage(p)}}>{p}</span>
              } )
            }
            </div>
            
            {props.users.map(el => <div className={style.container} key={el.id}>
                <div className={style.leftBlock}>
                  <NavLink to={'profile/'+ el.id}>
                  <img className={style.photoAva} src={el.photos.small != null ? el.photos.small : userDefaultIg} alt="noPhoto" />
                  </NavLink>
                  {el.followed ? <button disabled={props.isToggleFollow.some(id => id === el.id)} onClick={() => 
                    { 
                      props.toggleUnFollow(el.id)
                    }
                }>Unfollow</button>
                  : <button disabled={props.isToggleFollow.some(id => id === el.id)} onClick={() =>
                    {
                     props.toggleFollow(el.id)
                    }
                   
                   }>Follow</button>}
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
