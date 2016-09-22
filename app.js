var widgets = angular.module("widgets", []);

widgets.controller('Restaurant', ["$scope", function($scope) {
  $scope.restaurants = [];

  $scope.createRestaurant = function() {
    var object = {};
    object.name = $scope.name;
    object.food = $scope.food;
    object.image = $scope.image;
    $scope.restaurants.push(object);
    $scope.name = "";
    $scope.food = "";
    $scope.image = "";
  };

  $scope.deleteRestaurant = function(name, food) {
    for (var i = 0; i < $scope.restaurants.length; i++) {
      if ($scope.restaurants[i].name === name &&
          $scope.restaurants[i].food === food) {
        $scope.restaurants.splice(i, 1);
        break;
      }
    }
  };

  $scope.changeFilter = function(filter) {
    $scope.restaurantFilter = filter;
  };

}]);