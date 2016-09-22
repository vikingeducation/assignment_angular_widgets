var widgets = angular.module('widgets', []);

widgets.factory('instagramResponse', ['$window', function($window){
  return $window.instagramResponse;
}]);

widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];
  $scope.order = true;

  $scope.searchBy = "Food";

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
    $scope.restaurants.splice(i,1);
  };

  $scope.sortElements = function(e) {
    if ($scope.searchBy === angular.element(e.target).text()) {
      $scope.order = !$scope.order;
    } else {
      $scope.searchBy = angular.element(e.target).text();
    }
  };
}]);

widgets.controller('PhotosCtrl',
  ['$scope', 'instagramResponse',
  function($scope, instagramResponse) {
  $scope.rawFeed = instagramResponse.data;
}]);
