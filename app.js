var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){

      $scope.restaurants = [];

      $scope.createRestaurant = function () {
        var newRestaurant = {}
        newRestaurant.name = $scope.restaurantName
        newRestaurant.foodType = $scope.restaurantFoodType
        newRestaurant.image = $scope.restaurantImg
        $scope.restaurants.push(newRestaurant)
        $scope.restaurantName = ""
        $scope.restaurantFoodType = ""
        $scope.restaurantImg = ""
      }

      $scope.deleteRestaurant = function (index) {
        $scope.restaurants.splice(index, 1);
      }

      $scope.sortByName = function () {
        $scope.orderQuery = "name"
      }

      $scope.sortByType = function () {
        $scope.orderQuery = "foodType"
      }

    }]);