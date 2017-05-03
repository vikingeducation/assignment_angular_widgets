var widgets = angular.module('WidgetsApp', []);

widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];

  $scope.clearInputs = function(){
    $scope.name = '';
    $scope.typeOfFood = '';
    $scope.imageUrl = '';
  };

  $scope.destroy = function(index){
    $scope.restaurants.splice(index, 1);
  };

  $scope.createRestaurant = function(){
    var restaurant = {};
    restaurant.name = $scope.name;
    restaurant.type = $scope.typeOfFood;
    restaurant.imageUrl = $scope.imageUrl;
    $scope.restaurants.push(restaurant);

    $scope.clearInputs();
  };

}]);
