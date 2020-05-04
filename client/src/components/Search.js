import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({
      searchValue: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for a date of your choice (yyyy-mm-dd):
          <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;