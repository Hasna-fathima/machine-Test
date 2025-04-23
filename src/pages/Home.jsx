import {useContext,useState} from 'react'
import PostContext from '../Context/PostContext.jsx'
import PostCard from '../Components/PostCard.jsx'
import SearchBar from '../Components/SearchBar.jsx'
import PostForm from '../Components/PostForm.jsx'


const Home=()=> {
  const {posts}=useContext(PostContext)
  const [search,setSearch]=useState('')

  
const filteredPosts=posts ? posts.filter(post=>post.title.toLowerCase().includes(search.toLowerCase())) : []



return (
    <div className='container'>
      
        <h4>Posts</h4>
        <SearchBar search={search} setSearch={setSearch}/>
        <PostForm/>
       <div className='post-card-container'>{filteredPosts.length > 0 ? ( filteredPosts.map(post=>(
        <PostCard key={post.id}  post={post} />))):(<p>no matching posts found</p>)
       }

        
        </div>
      
    </div>
  )
}

export default Home
