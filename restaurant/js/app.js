var widgets = angular.module('widgets', []);

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name = "NAME!";
  $scope.foodType = "delicious!";
  $scope.imageUrl = "lookin good!";
  $scope.columnType = 'foodType';
  $scope.columnDirection = "+";
  $scope.id = 0

  $scope.createRestaurant = function(){
    var res = {};
    res.name = $scope.name;
    res.foodType = $scope.foodType;
    res.imageUrl = $scope.imageUrl;
    res.id = $scope.id
    $scope.id += 1

    $scope.restaurants.push(res);

    $scope.name = undefined;
    $scope.foodType = undefined;
    $scope.imageUrl = undefined;
  };
  $scope.deleteRestaurant = function(id) {
    for(var i = 0; i < $scope.restaurants.length; i++){
      if($scope.restaurants[i].id === id){
        $scope.restaurants.splice(i, 1)
      }
    }
  };

  $scope.returnColumn = function(){
    return $scope.columnDirection + $scope.columnType;
  };

  $scope.orderColumn = function(type){

    if($scope.columnType === type){
      $scope.columnDirection = ($scope.columnDirection === "+") ? "-" : "+";
    }
    $scope.columnType = type;
  };
}]);
