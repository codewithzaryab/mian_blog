import React from 'react'
import './Post.css'
import Posts from '../../component/posts/Posts'







const Post = () => {
  return (
    <>
<div className="post">
    <div className="postimg">
      <img src="abc.jpg" alt="" />
      </div>
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">
          Lorem ipsum dolor sit amet.
        </span>
          <hr />
        <span className="postdate">
        1 hour ago
      </span>
      </div>
      <p className="postdesc">
        Zaryab Tahir
      </p>
    
      
   
    </div>


    </>
  )
}

export default Post;