import { useParams } from "react-router-dom"
import { useContext } from "react"
import  PostContext  from "../Context/PostContext.jsx"

const PostDetails=()=> {
  const {id}=useParams()
  const {posts}=useContext(PostContext)
  const post=posts.find(post=>post.id.toString()===id
)
if(!post)return<p>post not found</p>
  return (
    <div className="container mt-4">
      <div className="post-page">
      <h2 className='mb-3'>{post.title}</h2>
      <p className="post-title">{post.body}</p>
      </div>
      
    </div>
  )
}

export default PostDetails
