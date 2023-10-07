import React from 'react'
import { useState } from 'react'

function Create({setItem}) {
  const [createBook, setCreateBook] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    setItem(createBook)
    console.log(createBook);
  }

  const onChangeHandler = e => {
    setCreateBook(e.target.value);
  }

  return (
    <div className='bg-blue-400 p-3 fixed -bottom-28 w-full h-fit z-10 ease-out duration-700 hover:bottom-0 active:bottom-0 pt-0 hover:pt-2'>

      <h1 className='text-white font-semibold text-3xl'>Add a Book</h1>
      <form onSubmit={onSubmitHandler}>
        <p className='font-light mb-1'>Title</p>
        <input className="rounded w-full h-8 indent-3" value={createBook} onChange={onChangeHandler}/>
        <button className="bg-white rounded p-1 mt-2 font-semibold" type='submit'>Create!</button>
      </form>
    </div>
  )
}

export default Create