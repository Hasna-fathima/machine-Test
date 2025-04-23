import {createContext,useState,useEffect}from 'react'


 const PostContext=createContext()


export const PostProvider =({children}) => {

const [posts,setPosts]=useState([])



useEffect(()=>{
  
  fetch('https://dummyjson.com/posts/search?q=love')
  .then(res => res.json())
  .then(data=>setPosts(data.posts))
  
},[])

const AddPost=(post)=>{
    setPosts([post,...posts])
};

const EditPost=(updatedPost)=>{
    const updatedPosts=posts.map(post=> post.id === updatedPost.id ? updatedPost:post )
    setPosts(updatedPosts)
}


  return (
    <PostContext.Provider value={{posts,AddPost,EditPost}}>
        {children}
      
    </PostContext.Provider>
  )
}


export default PostContext
