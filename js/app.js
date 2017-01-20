var widgets = angular.module('widgets', []);

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name = "NAME!";
  $scope.foodType = "delicious!";
  $scope.imageUrl = "lookin good!";
  $scope.createRestaurant = function(){
    var res = {};
    res.name = $scope.name;
    res.foodType = $scope.foodType;
    res.imageUrl = $scope.imageUrl;

    $scope.restaurants.push(res);

    $scope.name = undefined;
    $scope.foodType = undefined;
    $scope.imageUrl = undefined;
  };
  $scope.deleteRestaurant = function(index) {
    $scope.restaurants.splice(index, 1);
  };
}]);
