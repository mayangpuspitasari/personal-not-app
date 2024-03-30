import React from "react";
import { addNote } from "../utils/index";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah Catatan</h2>
      <NotesInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
