import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { useState } from "react";
export const Addnote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title:"",description: "",tag:""});
  const handleclick = (e) => {
    e.preventDefault();
    const tag="default"
    addNote(note.title,note.description,tag)
  };
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="container my-3">
        <h2 className="my-3">Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputdescPassword1" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={onchange}
              name="description"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleclick}
          >
            Add note
          </button>
        </form>
      </div>
    </>
  );
};
