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

  $scope.destroyRestaurant = function(restaurant) {
    $scope.restaurants.splice(
      $scope.restaurants.indexOf(restaurant),
      1
    );   
  };

  $scope.setSort = function(value) {
    console.log($scope.sort, value);
    console.log($scope.restaurants);

    $scope.sort = {
      "name": "-name",
      "food": "-food",
      "-name": "name",
      "-food": "food"
    }[$scope.sort] || value;
  };

}]);




