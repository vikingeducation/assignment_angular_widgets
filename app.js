

var widgets = angular.module('widgetsApp', []);

var restaurantCtrl = widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
      $scope.restaurants = [];
      $scope.name = "jimmys";
      $scope.foodType = "italian";
        //stuff is gonna go here
    }]);

