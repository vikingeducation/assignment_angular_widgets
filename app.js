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
  $scope.paginationCount = 0;
  $scope.paginationIncrement = 12;

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

  //pagination
  $scope.paginateBack = function(){
    if ($scope.paginationCount > 0){
      $scope.paginationCount -= $scope.paginationIncrement;
    }
  };

  $scope.paginateForward = function(resultCount){
    var limit = $scope.rawFeed.length - 12;

    if ($scope.paginationCount < limit){
      $scope.paginationCount += $scope.paginationIncrement;
    }

  };

  console.log(   $scope.rawFeed )

}]);

//filters

widgets.filter('hashTagFilter', function(){
  return function(collection, filters){
    if ( filters === undefined ) { return collection; }
    if ( filters[0] === '' ) { return collection; }

    var filteredCollection = [];

    collection.forEach(function(photo){
      var tags = photo['tags'];

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
