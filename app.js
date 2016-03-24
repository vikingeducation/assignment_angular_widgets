

var widgets = angular.module('widgetsApp', []);

widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
      $scope.restaurants = [];
      $scope.name = "jimmys";
      $scope.foodType = "italian";
      $scope.img = "http://findicons.com/files/icons/7/dinosaurs_toys/128/stegosaurus.png";
      $scope.addRestaurant = function(restaurant) {
        $scope.restaurants.push( 
          restaurant
          // name: $scope.name,
          // foodType: $scope.foodType
        )
        $scope.name = "";
        $scope.foodType = "";
        $scope.img = "";
      };

      $scope.deleteRestaurant = function(index) {
        $scope.restaurants.splice(index, 1)
      }
    }]);

