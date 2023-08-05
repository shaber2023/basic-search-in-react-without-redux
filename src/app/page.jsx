"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const[product,setProduct]=useState('')
  const[search,setSearch]=useState('')
  const fulldata=async()=>{
    const data = await axios.get('https://dummyjson.com/products')
    setProduct(data.data)
  }
  useEffect(()=>{
    fulldata();
  },[])

  return (
    <div>
      <input className='w-full p-3 m-3 text-black' type="text" placeholder='search' 
                           onChange={(e)=>setSearch(e.target.value)} />
      <section className='grid grid-cols-3 bg-green-400 text-black gap-2'>
      {product?.products?.filter((data)=>{
        return search.toLocaleLowerCase()=== ''? data : data.title.toLocaleLowerCase().includes(search)
      }).map((data)=>(
        <article key={data.id} className='m-2 p-3 bg-red-300 text-center'>
          <p> brand : {data.title}</p>
          <p> description : {data.description}</p>
        </article>
      ))}
      </section>
    </div>
  )
}

export default page


