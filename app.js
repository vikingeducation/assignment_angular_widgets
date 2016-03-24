var app = angular.module('RestaurantApp', []);

app.controller('RestaurantCtrl', 
  ["$scope", 
    function($scope) {
    $scope.restaurants = [];
    $scope.foodName = "";
    $scope.foodType = "";
    $scope.createFood = function() {
       var foodObj = {
        name: $scope.foodName,
        type: $scope.foodType,
       };
       $scope.restaurants.push(foodObj);
    }
    $scope.deleteRestaurant = function(restaurant) {
      var index = $scope.restaurants.indexOf(restaurant);
      $scope.restaurants.splice(index,1);
    }
  }]);
