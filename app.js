var widgets = angular.module('widgets', []);

widgets.factory('_', ['$window', function($window) {return $window._}]);

widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {
  $scope.restaurants = [];
  $scope.food;
  $scope.typeOfFood;
  $scope.url;
  $scope.searchFood;

  $scope.processForm = function(form) {
    var restaurant = {
      food: form.food.$viewValue,
      typeOfFood: form.typeOfFood.$viewValue,
      url: form.url.$viewValue
    };
    $scope.restaurants.push(restaurant);
    $scope.food = "";
    $scope.typeOfFood = "";
    $scope.url = "";
  };

  $scope.deleteRestaurant = function(index) {
    console.log(index);
    $scope.restaurants.splice(index,1);
  };

}]);