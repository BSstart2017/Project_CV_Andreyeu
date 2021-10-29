import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
          <textarea></textarea>
          <button>Add new Post</button>
          <Post newText = {'dfdggdfgfd'} col={'3'}/>
          <Post newText = {'dfg'} col={'5'}/>
          <Post newText = {'4435'} col={'7'}/>
          <Post newText = {'234'} col={'2'}/>
        </div>
    )
  }

export default MyPosts 