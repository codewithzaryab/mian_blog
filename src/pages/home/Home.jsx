import React from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import Post from '../../component/posts/Posts'
import Sidebar from '../../component/sidebar/Sidebar'

const Home = () => {
  return (
    <>
   <Header/>
   <div className="home">
   <Post/>
   <Sidebar/>
   </div>
   
   

   </>
   
   
  )
}

export default Home