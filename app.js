var widgets = angular.module("widgets", []);

widgets.controller('Restaurant', [$scope, function($scope) {
  $scope.restaurants = [];

  $scope.name = "";

  $scope.createRestaurant = function() {
    alert($scope.food);
  };

}]);