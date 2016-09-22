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
  $scope.filterSearch = '';
  $scope.tagSearch = '';

  var buildFilters = function() {
    var post = instagramResponse.data;
    var filters = {};
    var tags = {};
    for (var i = 0; i < post.length; i++) {
      filters[post[i].filter] = true;
      for(var tag in post[i].tags){
        tags[(post[i].tags[tag])] = true;
      }
    }
    return {
      filters: Object.keys(filters),
      tags: Object.keys(tags)
    };
  };
  $scope.filters = buildFilters().filters;
  $scope.tags = buildFilters().tags;

}]);
