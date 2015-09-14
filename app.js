var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
  [ '$scope',
    function($scope){

    $scope.restaurants = [];

    $scope.createRestaurant = function(){
      var newRestaurant = {};
      newRestaurant.name = $scope.name;
      newRestaurant.foodType = $scope.foodType;
      $scope.restaurants.push(newRestaurant);
      $scope.name = null;
      $scope.foodType = null;
    };

  }]);