var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
['$scope',
  function($scope) {
    $scope.restaurants = [];
    $scope.createRestaurant = function() {
      var newObj = {};
      newObj.name = $scope.name;
      newObj.foodType = $scope.typeOfFood;
      $scope.restaurants.push(newObj);
      $scope.name = "";
      $scope.typeOfFood = "";
    };
    $scope.removeRestaurant = function(index) {
      $scope.restaurants.splice(index, 1);
    };
  }
]);
