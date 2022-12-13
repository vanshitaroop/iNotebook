import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  
    var notesInitial = [
    {
      _id: "6391064e0488b6214a9b96251",
      user: "6390f22243f09b120117a7a9",
      "title": "Project",
      description: "develop inotebook before end of this month",
      tag: "personal",
      date: "2022-12-07T21:31:58.392Z",
      __v: 0
    },
    {
      _id: "6391064e088b6214a9b96251",
      user: "6390f22243f09b120117a7a9",
      "title": "food",
      description: "Eat momos daily",
      tag: "personal",
      date: "2022-12-07T21:31:58.392Z",
      __v: 0
    },
    {
      _id: "6391064e0488b6214a9b96251",
      user: "6390f22243f09b120117a7a9",
      "title": "wake up2",
      description: "have to wake up early",
      tag: "personal",
      date: "2022-12-07T21:31:58.392Z",
      __v: 0
    },
    {
      _id: "6391064e4088b6214a9b96251",
      user: "6390f22243f09b120117a7a9",
      "title": "wake up2",
      description: "have to wake up early",
      tag: "personal",
      date: "2022-12-07T21:31:58.392Z",
      __v: 0
    },
    {
      _id: "6391064e088b6214a9b96251",
      user: "6390f22243f09b120117a7a9",
      "title": "wake up2",
      description: "have to wake up early",
      tag: "personal",
      date: "2022-12-07T21:31:58.392Z",
      __v: 0
    },
    {
      _id: "63910650088b6214a9b96253",
      user: "6390f22243f09b120117a7a9",
      title: "wake up27",
      description: "have to wake up early",
      tag: "personal",
      date: "2022-12-07T21:32:00.197Z",
      __v: 0
    }
  ];
  
  const [notes, setnotes] = useState(notesInitial);
  //Add a Note
  const addNote=(title,description,tag)=>{
    console.log("Adding a note");
    const note=     {
      _id: "6391064e088b6214a9b96251",
      user: "6390f22243f09b120117a7a9",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-07T21:31:58.392Z",
      __v: 0
    }
    setnotes(notes.concat(note))
  }

  //Delete a note
  const delNote=(id)=>{
    console.log("deleting a note " + id);
    const newNote = notes.filter((note)=>{return note._id!==id});
    setnotes(newNote)
  }
  //Update a note
  const editeNote=(id,title,description,tag)=>{

  }
  return (
    <NoteContext.Provider value={{notes,setnotes,addNote,delNote,editeNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
