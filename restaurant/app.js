var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl', 
  ['$scope',
  function($scope) {
    $scope.restaurants = [];
    $scope.name;
    $scope.foodType;
    $scope.img;
    $scope.newRestaurant = function() {
      var rest = { name: $scope.name, foodType: $scope.foodType, img: $scope.img };
      $scope.restaurants.push(rest);
      $scope.name = "";
      $scope.foodType = "";
      $scope.img = "";
    };
    $scope.deleteRestaurant = function(restaurant) {
      for(var i = 0; i < $scope.restaurants.length; i++){
        if ($scope.restaurants[i] === restaurant) {
          $scope.restaurants.splice(i, 1);
        }
      }
    };
    $scope.search; // becomes new search criteria
    $scope.sortValue = true;
    $scope.displaySortValue = function() {
      var display;
      if (this.sortValue === true) {
        display = '^';
      } else if (this.sortValue === false) {
        display = 'v';
      }      
      return display;
    };
    $scope.orderQuery;
    $scope.setOrderQuery = function(query) {
      $scope.orderQuery = query;
      this.reverseSortValue();
      console.log($scope.orderQuery)
    };
    $scope.reverseSortValue = function() {
      this.sortValue = !this.sortValue;
    }
  }]);