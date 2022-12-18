import React from "react";
import  { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {delNote} =context
  const { note,updateNote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">
                {note.description}
            </p>
            <p>{note.tag}</p>
            <i className="fa-regular fa-trash-can mx-2" onClick={()=>delNote(note._id)}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>updateNote(note)}></i>
          </div>
        </div>
      </div>
    </>
  );
};
