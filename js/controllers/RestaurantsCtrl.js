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
  $scope.sort = '';

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
    $scope.sort = ($scope.sort[0] === '-') ? value : '-' + value;
  };

}]);




