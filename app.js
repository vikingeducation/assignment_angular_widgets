var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];

  $scope.searchBy = "Food"

  $scope.createRestaurant = function() {
    var restaurant = {
      name: $scope.name,
      foodType: $scope.food,
      imgUrl: $scope.imgUrl
    };
    $scope.restaurants.push(restaurant);
    $scope.name = '';
    $scope.food = '';
    $scope.imgUrl = "";
  };

  $scope.deleteRestaurant = function(i) {
    $scope.restaurants.splice(i,1)
  };

  $scope.sortElements = function(e) {

    $scope.searchBy = angular.element(e.target).text()
  };
}]);
