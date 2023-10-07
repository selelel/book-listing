import React from 'react'
import Update_func from './BookUpdate';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function BookShow({title, deleteByID, deleteByIDtoParent, content_id, book_id, contents_title }) {
  const [view, setView] = useState(false);

  const DeleteHandler = e => {
    deleteByIDtoParent(deleteByID);
  }

  const onUpdate = e => {
    setView(!view);
  }

  let content = <h2></h2>

  if(view){
    content = 
    <div className=''>
      <Update_func content_id={content_id} book_id={book_id} contents_title={contents_title}/>
    </div>
  }
  return (
    <div className='border-2 relative ease-out duration-500 hover:shadow-3xl hover:scale-105 border-blue-400 rounded-xl h-fit w-48 pt-3 pl-2 pr-2 pb-2'>
      <img 
      className='w-4 absolute right-1 top-1 cursor-pointer' 
      src='https://cdn-icons-png.flaticon.com/512/2891/2891491.png' 
      onClick={DeleteHandler}/>

      <img className='w-3 absolute right-6  top-1 cursor-pointer' src='https://cdn.icon-icons.com/icons2/1760/PNG/512/4105935-edit-pencil-update_113934.png' onClick={onUpdate}/>

      <img className='w-32 mx-auto mt-3' src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'/>

      <h1 className='text-xl mt-2 break-words cursor-pointer font-serif hover:underline underline-offset-4'>{title}</h1>
      {content}
    </div>
  )
}

export default BookShow