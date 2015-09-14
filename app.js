var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
  [ '$scope',
    function($scope){

    $scope.restaurants = [];

    $scope.sortCol = "foodType";

    $scope.photoFilter = '';

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
      $scope.availableFilters = [];
      $scope.availableTags = [];

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

    if(!activatePhotoFilter){return false;}

    var filteredPhotos = [];

    angular.forEach(collection, function(photo){
      if(photo.filter == activatePhotoFilter){
        filteredPhotos.push(photo);
      }
    });

    return filteredPhotos;
  };

});







