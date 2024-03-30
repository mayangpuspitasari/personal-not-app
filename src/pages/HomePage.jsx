import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getAllNotes } from "../utils/index";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywoardChangeHandler = this.onKeywoardChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywoardChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <h2>Daftar Catatan</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywoardChangeHandler}
        />
        <NotesList notes={notes} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePageWrapper;
