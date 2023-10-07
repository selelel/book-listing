import List from "./components/BookList";
import Create from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [content, setContent] = useState([{id:1, term:"The 48 Law of Power"},{id:2, term:"Harry Potter"},{id:4, term:"I Know Why the Caged Bird Sings"},{id:3, term:"The Alchemist (novel)"},{id:5, term:"The Zahir"},{id:6, term:"Child of the River"},{id:7, term:"To Let"}]);

  const DeleteHandler = term => {
    console.log(term)
    const updatedItems = content.filter((element,index) => {
      return index !== term
    })
    setContent(updatedItems);
  }

  const setItemHandler = term =>{
    const updatedItems = [{id:Math.trunc(Math.random()* 1000), term}, ...content]
    setContent(updatedItems);
    console.log(content)
  }

  const book_id_handler = (new_title, remove_id) => {
    console.log(content)
    const updatedArray = content.map(contents => {
      if(contents.id === remove_id){
        return { ...contents, term: new_title};
      }
      return contents;
      });
      console.log('HELlo', new_title + remove_id);
    setContent(updatedArray);
    
  }

  return (
    <div className="">
      <div className="bg-sky-400 h-fit">
        <h1 className="text-white font-bold text-xl pl-5">BookList</h1>
      </div>
    <Create setItem={setItemHandler}/>
    <List content={content} deleteByID={DeleteHandler} book_id={book_id_handler}/>
    </div>
  );
}

export default App;
