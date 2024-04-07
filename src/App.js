import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  const deleteNote = (id)=>{
    setNotes(prevValue =>{
      return prevValue.filter((noteItem,index)=>{
        return index !==id;
      })
    })
  }

  // const [heading,setHeading] = useState('Note title');
  // const [content,setContent] = useState('Note content');
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return (
        <Note 
        key = {index}
        id = {index}
        title={noteItem.title}  
        content={noteItem.content}
        onDelete = {deleteNote}/>);
      })}

      <Footer />
    </div>
  );
}

export default App;
