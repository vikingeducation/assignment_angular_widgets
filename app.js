var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl', 
  ['$scope', function($scope){
    $scope.sortReverse = true;
    $scope.sortCol = '';
    $scope.restaurants = [];
    $scope.name = "";
    $scope.type = "";
    $scope.picture = "";

    $scope.search = "";
    $scope.createRestaurant = function(){
      var restaurant = {};
      restaurant.name = $scope.name;
      restaurant.foodType = $scope.type;
      restaurant.picture = $scope.picture;

      $scope.restaurants.push(restaurant);

      $scope.name = "";
      $scope.type = "";
      $scope.picture = "";
    };

    $scope.removeRestaurant = function(index){
      $scope.restaurants.splice(index, 1);
    };
  }]);