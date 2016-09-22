var widgets = angular.module('widgets', []);

widgets.factory('_', ['$window', function($window) {return $window._}]);

widgets.controller('PhotosCtrl', ['$scope', '_', function($scope,_) { 
  $scope.rawFeed = instagramResponse.data;
  $scope.log = function() { 
    console.log("hi");
    return $scope.rawFeed;
  };



}]);

widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {
  $scope.restaurants = [];
  $scope.food;
  $scope.typeOfFood;
  $scope.url;
  $scope.searchFood;
  $scope.sortCol = 'typeOfFood';
  $scope.revOrder = false;
  $scope.sortBy = function(col) {
    if (col === $scope.sortCol) {
      $scope.revOrder = !$scope.revOrder
    }
    $scope.sortCol = col;
  };

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
    $scope.restaurants.splice(index,1);
  };

}]);