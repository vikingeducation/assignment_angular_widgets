

var widgets = angular.module('widgetsApp', []);

var restaurantCtrl = widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
        //stuff is gonna go here
      $scope.restaurants = [];
      $scope.name = "jimmys";
      $scope.foodType = "italian";
      $scope.addRestaurant = function( ) {
        $scope.restaurants.push( {
          name: $scope.name,
          foodType: $scope.foodType
        })
        console.log($scope.restaurants);
        console.log($scope.name);
        console.log($scope.foodType);
        $scope.name = "";
        $scope.foodType = "";
      }
    }]);

