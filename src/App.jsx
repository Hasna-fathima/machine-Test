import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import PostDetails from './pages/PostDetails.jsx'
import { PostProvider } from './Context/PostContext.jsx'
import './App.css'

function App() {

  return (
    <PostProvider>
      <Routes>
        <Route path="/"  element={<Home/>}/>  
        <Route path="/posts/:id" element={<PostDetails/>}/>  
        </Routes>
      </PostProvider>
      
  
  )
}

export default App
