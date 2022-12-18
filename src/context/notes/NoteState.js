import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
    var notesInitial = [
  ];
  
  const [notes, setnotes] = useState(notesInitial);
  //get a Note
  const getNote=async()=>{
    const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGYyMjI0M2YwOWIxMjAxMTdhN2E5In0sImlhdCI6MTY3MDQ0MzU4OH0.W-I9ZHY8UaB-P-1IEyHKItUkHXhmNPwML8Oro7cRhXY"
      },
      
    });

    const json = await response.json();
    console.log(json);
    setnotes(json)
  }

  //Add a Note
  const addNote=async(title,description,tag)=>{
    const response = await fetch('http://localhost:5000/api/notes/addnote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGYyMjI0M2YwOWIxMjAxMTdhN2E5In0sImlhdCI6MTY3MDQ0MzU4OH0.W-I9ZHY8UaB-P-1IEyHKItUkHXhmNPwML8Oro7cRhXY"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = response.json();
    console.log(json);
    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a83ca8d0e08",
      "user": "6390f22243f09b120117a7a9",
      "title": title,
      "description": description,
      "tag": tag,
      
      "__v": 0
    };
    setnotes(notes.concat(note))
  }

  //Delete a note
  const delNote=async(id)=>{
    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGYyMjI0M2YwOWIxMjAxMTdhN2E5In0sImlhdCI6MTY3MDQ0MzU4OH0.W-I9ZHY8UaB-P-1IEyHKItUkHXhmNPwML8Oro7cRhXY"
      },
    });
    const json = response.json();
    console.log(json);
    console.log("deleting a note " + id);
    const newNote = notes.filter((note)=>{return note._id!==id});
    setnotes(newNote)
  }
  //Update a note
  const editeNote= async(id,title,description,tag)=>{
    //API call
    const response = await fetch(`http://localhost:5000/api/notes//updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MGYyMjI0M2YwOWIxMjAxMTdhN2E5In0sImlhdCI6MTY3MDQ0MzU4OH0.W-I9ZHY8UaB-P-1IEyHKItUkHXhmNPwML8Oro7cRhXY"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    console.log(json);
    //from client side
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag
        break;
      }
    }
    setnotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{notes,setnotes,addNote,delNote,editeNote,getNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
