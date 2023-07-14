import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    const {search,setSearch} = props
    

  return (
    <div className='flex justify-around items-center py-4 bg-white z-20 shadow shadow-lg lg:absolute top-0 w-[100%]'>
        <Link to={"/"}>
            <div className="flex items-end">
                <h2 className="text-3xl italic">Let's</h2>
                <h3 className='text-2xl ml-2 text-red-500 font-bold'>eat.</h3>
            </div>
        </Link>
        <div className="hidden md:block">
            <input type="text" name='search' value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none border p-2 rounded shadow border-b-green-400' placeholder='Search' />
        </div>
    </div>
  )
}

export default Nav
