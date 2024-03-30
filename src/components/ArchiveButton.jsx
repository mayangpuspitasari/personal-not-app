import React from "react";

function ArchiveButton({ id, isArchive, onArchived }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchived(id)}
    >
      {isArchive ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;
