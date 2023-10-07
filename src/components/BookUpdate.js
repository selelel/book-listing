import React, { useState } from 'react'

function Update_func({content_id, book_id, contents_title}) {
  const [update, setUpdateBook] = useState(contents_title);

  const onSubmitHandler = e => {
    e.preventDefault();
    book_id(update, content_id)
  } 

  const onChangeHandler = e => {
    setUpdateBook(e.target.value);
  }

  return (
    <div className=' rounded-md mx-auto w-fit h-5/6 p-1'>
      <h1 className='text-xl font-thin'>Update Items</h1>
      <form onSubmit={onSubmitHandler}>
        <input className='indent-1 mt-2 w-full border border-blue-900 mx-auto rounded h-fit overflow-y-hidden break-words' value={update} onChange={onChangeHandler}/>
        <button className='bg-blue-400 mt-2 p-1 pt-0 text-white font- font-semibold rounded'>Save</button>
      </form>
    </div>
  )
}

export default Update_func