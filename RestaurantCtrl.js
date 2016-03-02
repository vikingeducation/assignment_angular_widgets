Widgets.controller('RestaurantCtrl', ['$scope', function($scope) {

  $scope.restaurants = [];
  $scope.food = '';
  $scope.name = '';
  $scope.image = '';
  $scope.q = '';
  $scope.sort = '';

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
    if (['name', 'food'].indexOf(value) > -1) {
      if ($scope.sort == value) {
        if ($scope.sort.charAt(0) != '-') {
          $scope.sort = '-' + value;
        }
      } else {
        $scope.sort = value;
      }
    }
  };

}]);




