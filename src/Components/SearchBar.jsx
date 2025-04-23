import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const  SearchBar=({search,setSearch})=> {
  return (
    <div className='search'>
        <input style={{width:'100%',padding:'10px',fontSize:'1rem',borderRadius:'5px',border:'1px solid green', marginBottom:'1rem'}} type='text' value={search} placeholder='search post by title....' onChange={e=>setSearch(e.target.value) } />
      
    </div>
  )
}

export default SearchBar
