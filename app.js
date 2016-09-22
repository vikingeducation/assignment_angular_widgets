var widgets = angular.module('widgets', []);

widgets.factory('_', ['$window', function($window) {return $window._}]);

widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {
  $scope.restaurants = [];
  $scope.food;
  $scope.typeOfFood;
  $scope.processForm = function(form) {
    var restaurant = {
      food: form.food,
      typeOfFood: form.typeOfFood
    };
    $scope.restaurants.push(restaurant);
    $scope.food = "";
    $scope.typeOfFood = "";
    console.log(food);
  }
}]);