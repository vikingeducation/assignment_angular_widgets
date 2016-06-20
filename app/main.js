import React from 'react';

// Components
import SortButtons from './sort_buttons.js';
import SearchForm from './search_form.js';
import RestaurantForm from './restaurant_form.js';
import RestaurantsFrame from './restaurants_frame.js';

// Main component controlling app
class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      restaurants: [],
      restaurantsUrl: '/api/restaurants',
      pollInterval: 2000,
      filterText: '',
      sortField: null,
      sortDirection: null
    }
    this.restaurantSubmit = this.restaurantSubmit.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.filter = this.filter.bind(this);
  }

  loadRestaurantsFromServer () {
    $.ajax({
      url: this.state.restaurantsUrl,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({restaurants: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.state.restaurantsUrl, status, err.toString());
      }.bind(this)
    });
  }

  // Submit to the server and refresh the list
  restaurantSubmit (restaurant) {
    // Optimistically set restaurants
    var restaurants = this.state.restaurants;
    restaurant.id = Date.now();
    var newRestaurants = restaurants.concat([restaurant]);
    this.setState({restaurants: newRestaurants});

    $.ajax({
      url: this.state.restaurantsUrl,
      dataType: 'json',
      type: 'POST',
      data: restaurant,
      success: function(data){
        this.setState({restaurants: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({restaurants: restaurants})
        console.error(this.state.restaurantsUrl, status, err.toString());
      }.bind(this)
    })
  }

  componentDidMount () {
    this.loadRestaurantsFromServer();
    // setInterval(this.loadRestaurantsFromServer, this.state.pollInterval);
  }

  deleteRestaurant (restaurantId, event) {
    $.ajax({
      url: this.state.restaurantsUrl,
      dataType: 'json',
      type: 'DELETE',
      data: {id: restaurantId},
      success: function(data){
        this.setState({restaurants: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.state.restaurantsUrl, status, err.toString());
      }.bind(this)
    })
  }

  filter (newText) {
    this.setState({filterText: newText});
  }

  filteredRestaurants () {
    var restaurants = this.state.restaurants,
        filterTextLower = this.state.filterText.toLowerCase();

    if (filterTextLower !== ''){
      restaurants = restaurants.filter(function(restaurant){
        var restaurantNameLower = restaurant.name.toLowerCase();
        return (restaurantNameLower.indexOf(filterTextLower) !== -1);
      });
    }

    return restaurants;
  }

  render () {
    return (
      <div id="main">
        <h1>Restaurants I've Visited</h1>
        <hr />
        <RestaurantForm
          restaurantSubmit={this.restaurantSubmit} />
        <div className="row">
          <SortButtons
            sortField={this.state.sortField}
            sortDirection={this.state.sortDirection} />
          <div className="col-sm-4">
            <SearchForm
              filterText={this.state.filterText}
              filter={this.filter} />
          </div>
        </div>
        <br />
        <RestaurantsFrame
          restaurants={this.filteredRestaurants()}
          deleteRestaurant={this.deleteRestaurant} />
      </div>
    );
  }
};

export default Main;
