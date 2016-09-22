var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];
  $scope.createRestaurant = function() {
    var restaurant = {
      name: $scope.name,
      foodType: $scope.food
    };
    $scope.restaurants.push(restaurant);
    $scope.name = '';
    $scope.food = '';
  };
}]);
