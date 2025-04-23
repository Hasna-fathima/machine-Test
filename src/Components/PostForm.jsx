import {useContext,useState,useEffect} from 'react'
import PostContext from '../Context/PostContext'
import { IoMdAdd } from "react-icons/io";


const PostForm=({editData=null,setEditing=null})=> {
    const {AddPost,EditPost}=useContext(PostContext);
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [showForm,setShowForm]=useState(false)

    useEffect(()=>{
        if(editData){
        setTitle(editData.title);
        setBody(editData.body)
        setShowForm(true)
    
     } },[editData]
)

const handleSubmit=(e)=>{
    e.preventDefault()
    const postObj={
        id:editData?.id || Date.now(),title,body
    }
    editData ? EditPost(postObj):
    AddPost(postObj);
    setTitle('')
    setBody('')
    setShowForm(false)
        if(setEditing)setEditing(false)
 }


  return (
    <div className='conrtainer'>
        {!showForm && !editData && (
            <button className='btn btn-custom' onClick={()=>setShowForm(true)}><IoMdAdd />Add post</button>
        )}
        {showForm && (

        <form onSubmit={handleSubmit}>
            <input className='form-control' value={title} onChange={e=>setTitle(e.target.value)} placeholder='Title' required/>
            <textarea  className='form-control' value={body} onChange={e=>setBody(e.target.value)}
            placeholder='body' required />
        
            <button className='btn btn-custom mt-2'type='submit' >{editData ? 'update' : 'Add'}post</button>
                {!editData && (
                    <button className='btn btn-custom' 
                    onClick={()=>setShowForm(false)}>cancel</button>
                )}
        
              </form>
        )}
      
    </div>
  )
}

export default PostForm
