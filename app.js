var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
  [ '$scope',
    function($scope){

    $scope.restaurants = [];

    $scope.sortCol = "foodType";

    $scope.createRestaurant = function(){
      var newRestaurant = {};
      newRestaurant.name = $scope.name;
      newRestaurant.foodType = $scope.foodType;
      newRestaurant.img = $scope.img;
      $scope.restaurants.push(newRestaurant);
      $scope.name = null;
      $scope.foodType = null;
      $scope.img = null;
    };

    $scope.deleteRestaurant = function(restaurant){
      var index = $scope.restaurants.indexOf(restaurant);
      $scope.restaurants.splice(index, 1);
    };

  }]);

widgets.controller('PhotosCtrl',
  [ '$scope',
    '$window',
    function($scope, $window){
      $scope.rawFeed = $window.instagramResponse;

      // Filters
      $scope.availableFilters = ["None"];
      $scope.availableTags = ["None"];
      $scope.photoFilter = "None";
      $scope.tagFilter = "None";

      // Pagination
      $scope.currentPage = 1;
      $scope.numPerPage = 12;

      $scope.collectFilters = (function(){
        for (var i=0; i< $scope.rawFeed.data.length; i++){
          if ($scope.availableFilters.indexOf($scope.rawFeed.data[i].filter) < 0){
            $scope.availableFilters.push($scope.rawFeed.data[i].filter);
          }
        }
      })();

      $scope.collectTags = (function(){
        for (var i=0; i<$scope.rawFeed.data.length; i++){
          for (var j=0; j<$scope.rawFeed.data[i].tags.length; j++){
            if ($scope.availableTags.indexOf($scope.rawFeed.data[i].tags[j]) < 0){
              $scope.availableTags.push($scope.rawFeed.data[i].tags[j]);
            }
          }
        }

      })();



  }]);

widgets.filter('filterPhotoByFilter', function(){

  return function(collection, activatePhotoFilter) {

    if(activatePhotoFilter.indexOf("None") > -1 ){return collection;}

    var filteredPhotos = [];

    angular.forEach(collection, function(photo){
      if(activatePhotoFilter.indexOf(photo.filter) > -1){
        filteredPhotos.push(photo);
      }
    });

    return filteredPhotos;
  };

});

widgets.filter('filterPhotoByTag', function(){

  return function(collection, activateTagFilter) {

    if(activateTagFilter.indexOf("None") > -1){return collection;}

    var filteredPhotos = [];

    angular.forEach(collection, function(photo){

      for(var i=0; i < activateTagFilter.length; i++){
        if(photo.tags.indexOf(activateTagFilter[i]) > -1){
          filteredPhotos.push(photo);
          break;
        }
      }

    });

    return filteredPhotos;
  };

});







