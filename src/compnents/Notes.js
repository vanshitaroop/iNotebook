import React from 'react'
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { Addnote } from './Addnote';
import { NoteItem } from './NoteItem';
export const Notes = () => {
    const context = useContext(NoteContext);
   const {notes,setnotes,addNote} = context;
  return (
   <>
   <Addnote/>
   <div className="row my-3 container">
        <h2 className="my-3">Your notes</h2>
          {notes.map((note)=>{
            return <NoteItem key={note.id} note={note}/>;
          })}
      </div>
   </>
  )
}
