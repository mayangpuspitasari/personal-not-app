import React from "react";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, body, createdAt, id, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemBody
        title={title}
        createdAt={createdAt}
        body={body}
        id={Number(id)}
      />

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NotesItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesItem;
