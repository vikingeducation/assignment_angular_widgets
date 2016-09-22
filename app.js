var widgets = angular.module("widgets", []);

widgets.controller('Restaurant', ["$scope", function($scope) {
  $scope.restaurants = [];

  $scope.createRestaurant = function() {
    var object = {}
    object.name = $scope.name;
    object.food = $scope.food;
    $scope.restaurants.push(object);
    $scope.name = "";
    $scope.food = "";
  };

  $scope.deleteRestaurant = function(name, food) {
    for(var i = 0;)
  }

}]);