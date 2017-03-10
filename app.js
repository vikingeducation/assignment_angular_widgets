var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl', 
  ['$scope',
  function($scope) {
    $scope.restaurants = [];
    $scope.name;
    $scope.foodType;
    $scope.img;
    $scope.newRestaurant = function() {
      var rest = { name: $scope.name, foodType: $scope.foodType, img: $scope.img };
      $scope.restaurants.push(rest);
      $scope.name = "";
      $scope.foodType = "";
      $scope.img = "";
    };
    $scope.deleteRestaurant = function(restaurant) {
      for(var i = 0; i < $scope.restaurants.length; i++){
        if ($scope.restaurants[i] === restaurant) {
          $scope.restaurants.splice(i, 1);
        }
      }
    }
  }]);