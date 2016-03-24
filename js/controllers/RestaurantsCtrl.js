// ----------------------------------------
// RestaurantsCtrl
// ----------------------------------------


Widgets.controller('RestaurantsCtrl', ['$scope', function($scope) {

  $scope.restaurants = [];
  // put in object
  // for new restaurant
  $scope.food = '';
  $scope.name = '';
  $scope.image = '';

  $scope.createRestaurant = function(restaurant) {
    $scope.restaurants.push(restaurant);
    $scope.image = $scope.food = $scope.name = '';
    console.log($scope.restaurants);
  };

  $scope.destroyRestaurant = function(id) {
    $scope.restaurants.splice(id, 1);
  };

  $scope.setSort = function(value) {
    console.log($scope.sort);

    var sortings = {
      "name": "-name",
      "food": "-food",
      "-name": "name",
      "-food": "food"
    };

    if (value == $scope.sort) {
      $scope.sort = sortings[value];
    } else if (Object.keys(sortings).indexOf(value) > 0) {
      $scope.sort = value;
    }
  };

}]);




