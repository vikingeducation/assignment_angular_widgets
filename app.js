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

  $scope.deleteRestaurant = function(rest) {
    var i = $scope.restaurants.indexOf(restaurants)
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
  $scope.page = 0;

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

  $scope.changePageFor = function(filtered) {
    if ($scope.page < 1  && filtered.length === 12) {
      $scope.page++;
    }
  };

  $scope.changePageBack = function() {
    if ($scope.page > 0) {
      $scope.page--;
    }
  };

  $scope.filteredRawFeed = function(filterSearch, tagSearch) {
    var values = $scope.rawFeed;
    if(filterSearch){
      values = values.filter(function(post){
        return post.filter === filterSearch;
      });
    }
    if (tagSearch[0]){
      console.log(tagSearch);
      values = values.filter(function(post){
        return tagSearch.every(function(tag){
          return post.tags.includes(tag);
        });
      });
    }
    $scope.feedLength = values.length;
    return values;
  };

}]);

widgets.filter('tagFilter', function() {
  return function(rawFeed, tagSearchValue) {
    if (tagSearchValue == false) {return rawFeed;}
    return rawFeed.filter(function(post) {
      return tagSearchValue.every(function(tag) {
        return post.tags.includes(tag);
      });
    });
  };
});
