import React from 'react';

// Sort Buttons
class SortButtons extends React.Component {
  render () {
    var sortField = this.props.sortField,
        sortDirection = this.props.sortDirection,
        sortedIcon = (<i className={"fa fa-sort-" + sortDirection} aria-hidden="true"></i>),
        notSortedIcon = (<i className="fa fa-sort" aria-hidden="true"></i>),
        nameSortIcon = notSortedIcon,
        foodTypeSortIcon = notSortedIcon;

    if (sortField === 'name') {
      nameSortIcon = sortedIcon;
    } else if (sortField === 'foodType') {
      foodTypeSortIcon = sortedIcon;
    }

    return (
      <div id="sort-buttons">
      <div className="col-sm-4">
        <button className="btn btn-default btn-block">
          {nameSortIcon}
          &nbsp;
          Sort by Name
        </button>
      </div>
      <div className="col-sm-4">
        <button className="btn btn-default btn-block">
          {foodTypeSortIcon}
          &nbsp;
          Sort by Cuisine
        </button>
      </div>
      </div>
    );
  }
}

export default SortButtons;
