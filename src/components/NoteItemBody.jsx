import React from "react";
import { showFormattedDate } from "../utils/date.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItemBody({ title, body, createdAt, id }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}> {title}</Link>
      </h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="contact-item__content">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
