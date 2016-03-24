var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
  ['$scope',
  function($scope){
    $scope.restaurants = [];
    $scope.name;
    $scope.typeOfFood;
    $scope.imgUrl;

    $scope.createRestaurant = function() {
      $scope.restaurants.push({ name: $scope.name, typeOfFood: $scope.typeOfFood, url: $scope.imgUrl});
      $scope.name = "";
      $scope.typeOfFood = "";
      $scope.imgUrl = "";
      console.log($scope.restaurants);
    };

    $scope.removeRestaurant = function(rest) {
      var index = $scope.restaurants.indexOf(rest);
      $scope.restaurants.splice(index, 1);
    };

    $scope.searchTerm;

    $scope.orderCategory;

    $scope.order = function(input) {
      $scope.orderCategory = input;
    }

  }]);
