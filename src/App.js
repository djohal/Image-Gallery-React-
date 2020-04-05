import React, { Component } from "react";
import "./App.css";
import { CardList } from "./card-list/card-list.component";
import { SearchBox } from "./search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch(
      `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 30)}`
    )
      .then((res) => res.json())
      .then((photos) => this.setState({ photos: photos }));
  }

  render() {
    const { photos, searchField } = this.state;
    const filteredPhotos = photos.filter((pic) =>
      pic.author.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1> Image Gallery </h1>
          <SearchBox
            placeholder="search authors..."
            handleChange={this.handleChange}
          ></SearchBox>
          <CardList photos={filteredPhotos}></CardList>
        </header>
      </div>
    );
  }
}

export default App;
