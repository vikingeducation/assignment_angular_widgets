import React from "react";

// Restaurant Table
class RestaurantsFrame extends React.Component {
  render () {
    var restaurants = this.props.restaurants,
        deleteRestaurant = this.props.deleteRestaurant,
        restaurantCards = restaurants.map(function(restaurant){
          return (
            <div className="well restaurant" key={restaurant.id}>
              <img src={restaurant.imageUrl} className="img-thumbnail" />
              <h4>{restaurant.name}</h4>
              <p className="text-muted">
                <span className="pull-right">
                  <button
                    className="btn btn-danger btn-xs"
                    onClick={deleteRestaurant.bind(null, restaurant.id)}>
                    Delete
                  </button>
                </span>
                <em>{restaurant.foodType}</em>
              </p>

            </div>
          )
        });

    return (
      <div id="restaurants">
        {restaurantCards}
      </div>
    )
  }
}

export default RestaurantsFrame;