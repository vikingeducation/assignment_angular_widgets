var widgets = angular.module('widgets', ['ui.bootstrap']);

widgets.controller('restaurantCtrl', ['$scope', function($scope){

  $scope.restaurants = [
    {
      name: "test",
      type: "Testican",
      image: "http://parkresto.com/wp-content/themes/parkrestaurant/images/11onlinereservationpark.jpg"
    },
    {
      name: "test2",
      type: "Italian"
    },
    {
      name: "test the third",
      type: "Mexican",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/7b/7b/c6/restaurant-view.jpg"
    },
    {
      name: "fourth test",
      type: "Italian",
      image: "https://static1.squarespace.com/static/51ab58f4e4b0361e5f3ed294/51ab58f4e4b0361e5f3ed29a/51ab80bee4b0058e26cfcb1f/1370194240299/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung.jpg"
    }
  ];

  $scope.createRestaurant = function(){
    if ($scope.name && $scope.type) {
      var newRestaurant = {
        name: $scope.name,
        type: $scope.type,
        image: $scope.image
      };
      $scope.restaurants.push(newRestaurant);
      $scope.name = "";
      $scope.type = "";
      $scope.image = "";
    }
  };

  $scope.order = 'type';

  $scope.sort = function(column) {
    if ($scope.order === column) {
      $scope.direction = !$scope.direction;
    } else {
      $scope.direction = false;
      $scope.order = column;
    }
  };

  $scope.deleteR = function(r) {
    for (var i = 0; i < $scope.restaurants.length; i++) {
      if ($scope.restaurants[i] === r) {
        $scope.restaurants.splice(i, 1);
        return;
      }
    }
  };
}]);

widgets.controller('PhotoCtrl', ['$scope', function($scope){
  $scope.rawFeed = instagramResponse;
  $scope.images = $scope.rawFeed.data;
  $scope.currentPage = 1;
  $scope.numPerPage = 12;

  $scope.getFilters = function() {
    var filters = [];
    for (var i = 0; i < $scope.images.length; i++) {
      var filter = $scope.images[i].filter;
      filters.indexOf(filter) === -1 ? filters.push(filter) : console.log("Filter already exists");
    }
    return filters;
  };

  $scope.getTags = function() {
    var tags = [];
    for (var i = 0; i < $scope.images.length; i++) {
      var tagArr = $scope.images[i].tags;
      tags = tags.concat(tagArr);
    }
    return tags;
  };

  $scope.filters = $scope.getFilters();
  $scope.tags = $scope.getTags();

  $scope.setFilterSet = function(set) {
    $scope.filterSet = set;
    console.log("getting run!!!!!!!!!!!!!!!!!!!!!!!");
  };

  $scope.setTagSet = function(tagSet) {
    $scope.tagSet = tagSet;
    console.log("getting run");
  };

  $scope.$watch("currentPage + numPerPage", function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
    end = begin + $scope.numPerPage;

    $scope.currentPhotos = $scope.images.slice(begin, end);
  });

}]);

widgets.filter('tagFilter', function() {
  var findOne = function (haystack, arr) {
    return arr.some(function (v) {
      return haystack.indexOf(v) >= 0;
    });
  };
  return function(photos, tags) {
    if (tags === undefined){
      return photos;
    }
    returnImages = [];
    for (var i = 0; i < photos.length; i++) {
      if (findOne(photos[i].tags, tags)) {
        returnImages.push(photos[i]);
      }
    }
    return returnImages;
  };
});

widgets.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(function() {
        return attrs.ngSrc;
      }, function (value) {
        if (!value) {
          element.attr('src', attrs.errSrc);
        }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  };
});
