var widgets = angular.module('widgets', [])

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name = "NAME!";
  $scope.typeOfFood = "delicious!";
  $scope.createRestaurant = function(form){
    console.log("ran")
    var res = {};
    res.name = form.name;
    res.foodType = form.typeOfFood;

    console.log(res);
  }
}])