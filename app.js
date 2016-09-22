var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {
  $scope.reverse = true;

  $scope.restaurants = [];
  $scope.onClick = function(form) {
    var obj = {};
    obj['name'] = $scope.name;
    obj['foodType'] = $scope.foodType;
    obj['webAddress'] = $scope.webAddress;
    $scope.restaurants.push(obj);
    $scope.name = '';
    $scope.foodType = '';
    $scope.webAddress = '';
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };

}]);


widgets.controller('PhotosCtrl', ['$scope', '_', function($scope, _) {
  $scope.filterUser;
  $scope.rawFeed = instagramResponse;
  $scope.filters = [];
  $scope.originalPictures = [];
  $scope.pictures = [];
  $scope.hashtags = [];
  $scope.users = [];

  for (var i = 0; i < $scope.rawFeed.data.length; i++) {
    var picture = {};
    var user = {};
    var pictureData = $scope.rawFeed.data[i];
    var userData = pictureData.user;

    picture['url'] = pictureData.images.thumbnail.url;
    picture['user'] = pictureData.user.username;
    picture['time'] = pictureData.created_time;
    picture['likes'] = pictureData.likes.count;
    picture['comments'] = pictureData.comments.count;
    picture['link'] = pictureData.link;
    picture['filter'] = pictureData.filter;
    picture['hashtags'] = pictureData.tags;


    user['username'] = userData.username;
    user['profilePic'] = userData.profile_picture;
    user['fullName'] = userData.full_name;


    $scope.filters.push(picture['filter']);
    $scope.originalPictures.push(picture);
    $scope.numPictures++;
    $scope.hashtags = $scope.hashtags.concat(picture['hashtags']);
    $scope.users.push(user);
  }
  $scope.filters = _.uniqBy($scope.filters);
  $scope.hashtags = _.uniqBy($scope.hashtags);
  $scope.pictures = $scope.originalPictures;

  // Photo pagination.
  $scope.currentPage = 0;
  $scope.numPerPage = 12;
  $scope.maxSize = 5;

  // Tells you how many pages there are.
  $scope.numPages = function () {
    return Math.ceil($scope.pictures.length / $scope.numPerPage);
  };

  $scope.$watch("currentPage", function() {
    console.log($scope.currentPage);
    var firstPhotoIndex = ($scope.currentPage) * $scope.numPerPage;
    var lastPhotoIndex = firstPhotoIndex + $scope.numPerPage;
    $scope.pictures = $scope.originalPictures.slice(firstPhotoIndex,lastPhotoIndex);
  });

}]);


// adding lodash
widgets.factory('_', ['$window', function($window) {
  return $window._;
}]);
