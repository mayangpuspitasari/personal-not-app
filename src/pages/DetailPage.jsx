import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote } from "../utils/index";

function DetailPageWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();

  function homeNavigate() {
    navigate("/");
  }
  return <DetailPage id={Number(id)} navigate={homeNavigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(Number(this.props.id)),
    };

    this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
  }

  onDeleteClickHandler(id) {
    deleteNote(id);
    const { navigate } = this.props;
    navigate();
  }

  render() {
    if (this.state.note === null) {
      return <p>404 Pages Not Found</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} onDelete={this.onDeleteClickHandler} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
