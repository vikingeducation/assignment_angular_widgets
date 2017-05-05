var widgets = angular.module('WidgetsApp', []);

widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];

  $scope.clearInputs = function(){
    $scope.name = '';
    $scope.typeOfFood = '';
    $scope.imageUrl = '';
  };

  $scope.destroy = function(index){
      $scope.restaurants.forEach(function(restaurant){
        console.log(restaurant.idx)
        if (restaurant.idx === index) {
          $scope.restaurants.splice(index, 1);
        }
      });
  };

  $scope.createRestaurant = function(){
    var restaurant = {};
    restaurant.name = $scope.name;
    restaurant.type = $scope.typeOfFood;
    restaurant.imageUrl = $scope.imageUrl;
    restaurant.idx = $scope.restaurants.length;

    $scope.restaurants.push(restaurant);

    $scope.clearInputs();
  };

}]);

//photos.html excercise

widgets.controller('PhotosCtrl', ['$scope', '$window',  function($scope, $window){
  $scope.rawFeed = $window.instagramResponse['data'];
  $scope.userToFilter = '';

  $scope.filters = [''];
  $scope.selectedFilter = "";
  $scope.hashTags = [''];

  $scope.buildFilters = function(post){
    var filter = post['filter'];

    if ( $scope.filters.indexOf( filter ) === -1 ) {
      $scope.filters.push( filter );
    }
  };

  $scope.buildHashTags = function(post){
    var hashTags = post['tags'];

    hashTags.forEach(function(hashTag){
      if ( $scope.hashTags.indexOf( hashTag ) === -1 ) {
        $scope.hashTags.push( hashTag );
      }
    });
  };

  $scope.buildAll = function(post){
    $scope.buildFilters(post);
    $scope.buildHashTags(post);
  };

  //user list
  $scope.setUserFilter = function(post){
    var user = post['user']['username'];
    $scope.userToFilter = user;
  };

}]);

//filters

widgets.filter('userFilter', function(){
  return function(collection, userToFilter){
    if ( userToFilter === '' ) { return collection; }

    filteredCollection = [];
    collection.forEach(function(photo){
      var photosUser = photo['user']['username'];
        if ( photosUser === userToFilter ) {
          filteredCollection.push(photo);
      }
    });
    return filteredCollection;
  };
});

widgets.filter('hashTagFilter', function(){
  return function(collection, filters){
    if ( filters === undefined ) { return collection; }
    if ( filters[0] === '' ) { return collection; }

    var filteredCollection = [];

    collection.forEach(function(photo){
      var user = photo['user']['username'];

      if ( tags !== undefined ) {
        tags.forEach(function(tag){
          if ( filters.indexOf( tag ) !== -1 ) {
            filteredCollection.push(photo);
          }
        });
      }
    });
    return filteredCollection;
  };
});
