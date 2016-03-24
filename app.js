var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
['$scope',
  function($scope) {
    $scope.headers = ['name', 'foodType', 'Delete', 'Image']
    $scope.restaurants = [];
    $scope.orderHeading = 'name';
    $scope.createRestaurant = function() {
      var newObj = {};
      newObj.name = $scope.name;
      newObj.foodType = $scope.foodType;
      $scope.restaurants.push(newObj);
      $scope.name = "";
      $scope.foodType = "";
    };
    $scope.removeRestaurant = function(index) {
      $scope.restaurants.splice(index, 1);
    };


    $scope.orderByHeading = function(index) {
      $scope.orderHeading = $scope.headers[index];
    }
  }
]);
