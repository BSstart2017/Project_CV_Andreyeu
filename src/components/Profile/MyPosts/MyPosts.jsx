import React from "react"
import Post from "./Post/Post"
import style from "./MyPosts.module.css"
import { addPostAC, newTextPostAC } from "../../../redux/profile-reducer"



const MyPosts = (props) => {
 
  let postElement = props.state.postData.map(el => <Post newText = {el.newText} col={el.col}/>)

  const onAddPost = () => props.dispatch(addPostAC())
  const onChangePostText = event => props.dispatch(newTextPostAC(event.target.value))
  
    return (
        <div className={style.myPostBlock}>
          <h3> My post </h3>
          <div><textarea value={props.state.newTextPost} onChange={onChangePostText}/></div>
          <div><button onClick={onAddPost}>Add new Post</button></div>
          {postElement}
        </div>
    )
  }

export default MyPosts 