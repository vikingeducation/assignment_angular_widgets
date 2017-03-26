var widgets = angular.module('widgets', []);

widgets.controller('restaurantCtrl', ['$scope', function($scope){

  $scope.restaurants = [
    {
      name: "test",
      type: "Testican"
    },
    {
      name: "test2",
      type: "Italian"
    },
    {
      name: "test the third",
      type: "Mexican"
    },
    {
      name: "fourth test",
      type: "Italian"
    }
  ];

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

  $scope.order = 'type';

  $scope.sort = function(column) {
    if ($scope.order === column) {
      $scope.direction = !$scope.direction;
    } else {
      $scope.direction = false;
      $scope.order = column;
    }
  };

  $scope.deleteR = function(r) {
    for (var i = 0; i < $scope.restaurants.length; i++) {
      if ($scope.restaurants[i] === r) {
        $scope.restaurants.splice(i, 1);
        return;
      }
    }
  };
}]);
