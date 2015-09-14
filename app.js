var widgets = angular.module("widgets", []);

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name ="";
  $scope.foodType = "";
  $scope.restaurantImage = ""
  $scope.foodTypeFilter = "";
    $scope.createRestaurant = function(){


    $scope.restaurants.push({
      name: $scope.name,
      foodType: $scope.foodType,
      image: $scope.restaurantImage
    });
    $scope.name = "";
    $scope.foodType = "";

  };

  $scope.removeRestaurant = function(index){
    $scope.restaurants.splice(index, 1)
  }


}]);