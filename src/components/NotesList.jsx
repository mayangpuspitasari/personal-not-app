import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <div className="empty-message-container">
          <p>Tidak ada catatan</p>
        </div>
      ) : (
        notes.map((note) => (
          <NotesItem
            key={note.id}
            id={Number(note.id)}
            onDelete={onDelete}
            {...note}
          />
        ))
      )}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesList;
