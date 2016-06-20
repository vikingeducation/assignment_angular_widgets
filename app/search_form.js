import React from 'react';
import ReactDOM from 'react-dom';

// Search form
class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange (event) {
    var newFilterText = ReactDOM.findDOMNode(this.refs.search).value;
    this.props.filter(newFilterText);
  }

  render () {
    return (
      <div className="text-right">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Search text"
              className="form-control"
              ref="search"
              value={this.props.filterText}
              onChange={this.handleFilterChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;