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
  $scope.filteredArray = $scope.rawFeed
  $scope.userSearch = "";
  $scope.highlightIndex;

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

  $scope.changePageFor = function() {
    if ($scope.page < $scope.filteredArray.length / 12 - 1) {
      $scope.page++;
    }
  };

  $scope.changePageBack = function() {
    if ($scope.page > 0) {
      $scope.page--;
    }
  };

  $scope.searchByUser = function(username) {
    $scope.userSearch = username;
  };

  $scope.$watchGroup(['tagSearch', 'filterSearch', 'userSearch'], function() {
                $scope.page = 0
                var values = $scope.rawFeed;
                if($scope.filterSearch){
                  values = values.filter(function(post){
                    return post.filter === $scope.filterSearch;
                  });
                }
                if ($scope.tagSearch[0]){
                  values = values.filter(function(post){
                    return $scope.tagSearch.every(function(tag){
                      return post.tags.includes(tag);
                    });
                  });
                }
                if($scope.userSearch){
                  values = values.filter(function(post){
                    return post.user.username === $scope.userSearch;
                  });
                }
                $scope.feedLength = values.length;
                $scope.filteredArray = values;
              });

    $scope.selectResult = function(e) {
      if(e.keyCode === 40){
        if($scope.highlightIndex){
          if($scope.highlightIndex < $scope.possiblePeeps.length - 1){
            $scope.highlightIndex++;
          }
        } else {
          $scope.highlightIndex = 0;
        }
      } else if(e.keyCode === 38) {
        if($scope.highlightIndex){
          if($scope.highlightIndex > 0){
            $scope.highlightIndex--;
          }
        }
      }
    };

    // $scope.$watch('highlightIndex', function(){

    // });

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

// widgets.controller('UsersCtrl',
//   ['$scope', 'instagramResponse',
//   function($scope, instagramResponse) {
//     $scope.rawFeed = instagramResponse.data;
//
// }]);
