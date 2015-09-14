var widgets = angular.module("widgets", []);

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name ="cool Restaurant";
  $scope.foodType = "delicious food";
  $scope.createRestaurant = function(){
    console.log('inside fn');
    console.log($scope.name);
    console.log($scope.foodType);

    $scope.restaurants.push({
      name: $scope.name,
      foodType: $scope.foodType
    });
    $scope.name = "";
    $scope.foodType = "";

  };
  $scope.$watch("name", function(newVal, oldVal){

  });

}]);