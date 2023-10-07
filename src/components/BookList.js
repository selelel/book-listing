
import React, { StrictMode } from 'react'
import BookShow from './BookShow'
import { useState } from 'react'
import BookUpdate from './BookUpdate'

function List({content , deleteByID, book_id}) {
  
  const ListofItems = content.map((contents, index)=> {
    return(
      <div className=''>
      <BookShow title={contents.term} content_id={contents.id} contents_title={contents.term} deleteByID={index} deleteByIDtoParent={deleteByID} book_id={book_id}/>

      </div>
    );
  })
  return (
    <div className='flex flex-wrap gap-7 p-5'>{ListofItems}</div>
  )
}

export default List

{/* <div className='flex gap-2'>
<li className='text-center' key={contents.id}>
    {contents.term}</li>
<img className='w-5 cursor-pointer' src='https://e1.pngegg.com/pngimages/314/988/png-clipart-symbolize-x.png' onClick={e => {deleteByID(index);}}/>
</div> */}