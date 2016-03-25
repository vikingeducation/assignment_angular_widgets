var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
['$scope',
  function($scope) {
    $scope.headers = ['name', 'foodType', 'Delete', 'Image'];
    $scope.restaurants = [];
    $scope.orderHeading = 'name';
    $scope.createRestaurant = function() {
      var newObj = {};
      newObj.name = $scope.name;
      newObj.foodType = $scope.foodType;
      $scope.restaurants.push(newObj);
      $scope.name = "";
      $scope.foodType = "";
    };
    $scope.removeRestaurant = function(restaurant) {
      $scope.restaurants.splice($scope.restaurants.indexOf(restaurant), 1);
    };


    $scope.orderByHeading = function(index) {
      $scope.orderHeading = $scope.headers[index];
    };
  }
]);


widgets.controller('PhotosCtrl', ['$scope', function($scope){
  $scope.rawFeed = instagramResponse.data;

  // Grab all filters for current photo instagram photo gallery
  $scope.filters = [];
  for (var i = 0; i < $scope.rawFeed.length; i++) {
    $scope.filters.push($scope.rawFeed[i].filter);
  }

  // Remove duplicate filters
  $scope.filters = $scope.filters.filter(function(value, index) {
    return $scope.filters.indexOf(value) == index;
  });

  // Grab all tags for current photo instagram photo gallery
  $scope.hashtags = [];
  for (i = 0; i < $scope.rawFeed.length; i++) {
    $scope.hashtags = $scope.hashtags.concat($scope.rawFeed[i].tags);
  }

  // Remove duplicate tags
  $scope.hashtags = $scope.hashtags.filter(function(value, index) {
    return $scope.hashtags.indexOf(value) == index;
  });

  $scope.photos = $scope.rawFeed.map(function(obj){
    return {
      url: obj.images.low_resolution.url,
      username: obj.user.username,
      createdAt:  obj.created_time,
      likes: obj.likes.count,
      comments: obj.comments.count,
      photoLink: obj.link,
      hashtags: obj.tags.join(', '),
      filter: obj.filter
    };
  });

  $scope.selectFilter = "";
  $scope.selectTag = [];

  $scope.photoFilter = function(photo) {
    var tagMatch = true;
    $scope.selectTag.forEach(function(tag) {
      if (photo.hashtags.indexOf(tag) === -1) {
        tagMatch = false;
      }
    });
    return tagMatch;
  };

  $scope.totalPages = new Array(Math.floor($scope.photos.length/12));
  for(i = 0; i < $scope.totalPages.length; i++) $scope.totalPages[i] = i;
  $scope.currentPage = 0;

  $scope.setPage = function(page) {
    $scope.currentPage = page;
  };

  $scope.renderPic = function(collection , index, comparator) {
    if (index >= $scope.currentPage * 12 && index <= $scope.currentPage * 12 + 11) {
      return true;
    } else {
      return false;
    }
    //return true;
  };

}]);
