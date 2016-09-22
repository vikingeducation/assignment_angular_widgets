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

  $scope.rawFeed = instagramResponse;
  $scope.filters = [];
  $scope.pictures = [];
  $scope.hashtags = [];


  for (var i = 0; i < $scope.rawFeed.data.length; i++) {
    var picture = {};
    var pictureData = $scope.rawFeed.data[i];
    picture['url'] = pictureData.images.thumbnail.url;
    picture['user'] = pictureData.user.username;
    picture['time'] = pictureData.created_time;
    picture['likes'] = pictureData.likes.count;
    picture['comments'] = pictureData.comments.count;
    picture['link'] = pictureData.link;
    picture['filter'] = pictureData.filter;
    picture['hashtags'] = pictureData.tags;
    $scope.filters.push(picture['filter']);
    $scope.pictures.push(picture);
    $scope.hashtags = $scope.hashtags.concat(picture['hashtags']);
  }
  $scope.filters = _.uniqBy($scope.filters);
  $scope.hashtags = _.uniqBy($scope.hashtags);


}]);


// adding lodash
widgets.factory('_', ['$window', function($window) {
  return $window._;
}]);
