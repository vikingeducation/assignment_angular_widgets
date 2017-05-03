var widgets = angular.module('WidgetsApp', []);

widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];

  $scope.clearInputs = function(){
    $scope.name = '';
    $scope.typeOfFood = '';
    $scope.imageUrl = '';
  };

  $scope.destroy = function(index){
    $scope.restaurants.splice(index, 1);
  };

  $scope.createRestaurant = function(){
    var restaurant = {};
    restaurant.name = $scope.name;
    restaurant.type = $scope.typeOfFood;
    restaurant.imageUrl = $scope.imageUrl;
    $scope.restaurants.push(restaurant);

    $scope.clearInputs();
  };

}]);

//photos.html excercise

widgets.controller('PhotosCtrl', ['$scope', '$window',  function($scope, $window){
  $scope.rawFeed = $window.instagramResponse['data'];
  $scope.posts = (function(){
    var collection = [],
        post;
    $scope.rawFeed.forEach(function(postJSON){
      post = {};

      post.imageUrl = postJSON['images']['low_resolution']['url'];
      post.imagePageUrl = postJSON['link'];
      post.username = postJSON['user']['username'];
      post.userUrl = "https://www.instagram.com/" + post.username;

      post.likeCount = postJSON['likes']['count'];
      post.commentCount = postJSON['comments']['count'];

      collection.push( post );
    });
    return collection;
  })();

}]);
