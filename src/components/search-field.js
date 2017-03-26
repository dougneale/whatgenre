import React, {Component} from 'react';

class SearchField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState(
      {searchTerm: event.target.value}
    );
    this.props.onSearchTermChange(this.state.searchTerm);
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control"
          placeholder="Enter artist name"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}

export default SearchField;
