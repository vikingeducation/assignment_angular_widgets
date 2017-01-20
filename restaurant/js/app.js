var widgets = angular.module('widgets', []);

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name = "NAME!";
  $scope.foodType = "delicious!";
  $scope.imageUrl = "lookin good!";
  $scope.columnType = 'foodType'
  $scope.columnDirection = "+" 

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

  $scope.returnColumn = function(){
    return $scope.columnDirection + $scope.columnType;
  }

  $scope.orderColumn = function(type){

    if($scope.columnType === type){ 
      $scope.columnDirection = ($scope.columnDirection === "+") ? "-" : "+";
    }
    $scope.columnType = type;
  }
}]);
