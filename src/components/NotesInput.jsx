import React from "react";
import PropTypes from "prop-types";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
      this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler = (event) => {
    if (this.state.limit >= 0 && event.target.value.length <= 50) {
      this.setState(() => ({
        title: event.target.value,
        limit: 50 - event.target.value.length,
      }));
    }
  };

  onContentChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => ({
      title: "",
      body: "",
      limit: 50,
    }));

    const message = alert(
      `Catatatn dengan judul ${this.state.title} berhasil di tambahkan....`
    );
  };

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {this.state.limit}
        </p>
        <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Ini Adalah Judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Tuliskan Catatan Di Sini"
            value={this.state.body}
            onChange={this.onContentChangeEventHandler}
          ></textarea>

          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
