var widgets = angular.module("WidgetsApp", []);

widgets.controller("RestaurantCtrl", ['$scope', function($scope) {
  $scope.restaurants = [
  {name: 'martannes', foodType: 'mexican'},
  {name: 'omaligans', foodType: 'irish pub'}
  ];
  $scope.name = "shift";
  $scope.typeOfFood = "tapas";
  $scope.icon = "";
  $scope.query1 = "";
  $scope.clickOrder = "name"
  $scope.createRestaurant = function(){
    console.log("create function fire");
    var rest = {};
    rest.name = angular.copy($scope.name);
    rest.foodType = angular.copy($scope.typeOfFood);
    rest.icon = angular.copy($scope.icon);
    $scope.restaurants.push(rest);
    $scope.name = "";
    $scope.typeOfFood = "";
    $scope.icon = "";
  };

  $scope.removeRest = function(index){
    $scope.restaurants.splice(index, 1);
  };

  $scope.activeSearch = function(){
    if ($scope.query1 !== "") {
      return true;
    } else {
      return false;
    };
  };

  $scope.clickSort = function(input) {
    if ($scope.clickOrder === input){
      $scope.clickOrder = "-" + input;
    } else {
      $scope.clickOrder = input;
    };
  }
}]);

widgets.controller("PhotosCtrl", ['$scope', function($scope){
  $scope.rawFeed = instagramResponse;
}]);
