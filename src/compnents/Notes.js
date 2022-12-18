import React from "react";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { Addnote } from "./Addnote";
import { NoteItem } from "./NoteItem";
import { useState } from "react";
export const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNote,editeNote } = context;
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  
  const [note, setNote] = useState({id:"",etitle:"",edescription: "",etag:""});
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title , edescription:currentNote.description,etag:currentNote.tag})
  };
  const handleclick = (e) => {
    e.preventDefault();
    editeNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
  };
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
      <Addnote />
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={onchange}
                    value={note.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputdescPassword1"
                    className="form-label"
                  >
                    description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    onChange={onchange}
                    name="edescription"
                    value={note.edescription}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputdescPassword1"
                    className="form-label"
                  >
                    tag
                  </label>
                  <input
                    name="etag"
                    type="text"
                    className="form-control"
                    id="etag"
                    onChange={onchange}
                    value={note.etag}
                  />
                </div>
               
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleclick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 container">
        <h2 className="my-3">Your notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note.id} note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
};
