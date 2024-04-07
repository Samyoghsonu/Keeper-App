import React, { useState } from "react";

const CreateArea = (props) => {

  const [note,setNote] = useState({
    title : '',
    content : ''
  })

  const handleChange = (event)=>{
    const {name,value} = event.target;

    setNote(prevNote => {
        return{
            ...prevNote,
            [name]:value
        }
    })
  }

  const submitNote = (event)=>{
    props.onAdd(note);
    setNote({
      title : '',
      content : ''
    }

    )
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
