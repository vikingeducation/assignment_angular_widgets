var widgets = angular.module('widgets', []);

widgets.controller('restaurantCtrl', ['$scope', function($scope){

  $scope.restaurants = [{
    name: "test",
    type: "Testican"
  }];
  $scope.createRestaurant = function(){
    if ($scope.name && $scope.type) {
      var newRestaurant = {
        name: $scope.name,
        type: $scope.type
      };
      $scope.restaurants.push(newRestaurant);
      $scope.name = "";
      $scope.type = "";
    }
  };
}]);
