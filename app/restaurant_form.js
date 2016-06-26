import React from 'react';

// Restaurant Form
class RestaurantForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      foodType: '',
      imageUrl: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFoodTypeChange = this.handleFoodTypeChange.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (event) {
    this.setState({name: event.target.value});
  }

  handleFoodTypeChange (event) {
    this.setState({foodType: event.target.value});
  }

  handleImageUrlChange (event) {
    this.setState({imageUrl: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();

    var name = this.state.name.trim(),
        foodType = this.state.foodType.trim(),
        imageUrl = this.state.imageUrl.trim();

    if (!name || !foodType || !imageUrl){
      return
    }

    this.props.restaurantSubmit({
      name: name,
      foodType: foodType,
      imageUrl: imageUrl
    })

    this.setState({
      name: '',
      foodType: '',
      imageUrl: ''
    });
  }

  render () {
    return (
      <div className="well">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Restaurant name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Type of cuisine"
              className="form-control"
              value={this.state.foodType}
              onChange={this.handleFoodTypeChange} />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Image URL"
              className="form-control"
              value={this.state.imageUrl}
              onChange={this.handleImageUrlChange} />
          </div>
          <input type="submit" value="Add restaurant!" className="btn btn-default" />
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
