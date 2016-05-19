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
    console.log($scope.sort, value);

    $scope.sort = {
      "name": "-name",
      "food": "-food",
      "-name": "name",
      "-food": "food"
    }[$scope.sort] || value;
  };

}]);




