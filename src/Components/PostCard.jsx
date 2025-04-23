import { useContext,useState } from 'react'
import {Link} from 'react-router-dom' 
import PostContext from '../Context/PostContext.jsx'
import PostForm from './PostForm'
import { FaRegEdit } from "react-icons/fa";

const PostCard=({post})=> {
    const [editing,setEditing]=useState(false)



  return (
    <div className='post-card'>
    <div  style={{ margin:'1rem',padding:'1rem'}}>
        {editing?(
            <PostForm editData={post}
            setEditing={setEditing}/>
        ):(
            <>
            <Link className='card-info' to={`/posts/${post.id}`}>
            
            <h3>{post.title}</h3> 
            <p>{post.body.slice(0,100)}...</p> 
              


            </Link>
            <button className='btn btn-custom' onClick={()=>setEditing(true)}><FaRegEdit /></button> 
         
        </>


        )}
      
    </div>
    </div>
  )
}

export default PostCard
