var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
  [ '$scope',
    function($scope){

    $scope.restaurants = [];

    $scope.createRestaurant = function(){
      var newRestaurant = {};
      newRestaurant.name = $scope.name;
      newRestaurant.foodType = $scope.foodType;
      newRestaurant.img = $scope.img;
      $scope.restaurants.push(newRestaurant);
      $scope.name = null;
      $scope.foodType = null;
      $scope.img = null;
    };

    $scope.deleteRestaurant = function(restaurant){
      var index = $scope.restaurants.indexOf(restaurant);
      $scope.restaurants.splice(index, 1);
    }

  }]);