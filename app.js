

var widgets = angular.module('widgetsApp', []);

widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
      $scope.restaurants = [
        {"name": "john", "foodType": "mexican"}, 
        {"name": "julia", "foodType": "hamburgers"}, 
        {"name": "aaaa", "foodType": "aaaaa"}, 
        {"name": "bbbb", "foodType": "BBB"}];
      $scope.name = "jimmys";
      $scope.foodType = "italian";
      $scope.img = "http://findicons.com/files/icons/7/dinosaurs_toys/128/stegosaurus.png";
      $scope.addRestaurant = function(restaurant) {
        $scope.restaurants.push( restaurant );
        $scope.name = "";
        $scope.foodType = "";
        $scope.img = "";
      };

      $scope.deleteRestaurant = function(index) {
        $scope.restaurants.splice(index, 1);
      };
      $scope.sortType = "foodType"
      $scope.sortOrder = "+";
      $scope.sortBy = $scope.sortOrder + $scope.sortType

      $scope.changeSortOrder = function(column) {
        console.log(column)
        // if you click on the same sortType, change sortOrder
        if (column === $scope.sortType) {
          $scope.sortOrder == "+" ? $scope.sortOrder = "-" : $scope.sortOrder = "+";
        }
        // if you click on a different sortType, change sortType and default to ascending
        else {
          $scope.sortType = column;
          $scope.sortOrder = "+";
        }
        $scope.sortBy = $scope.sortOrder + $scope.sortType
      }
    }]);

widgets.controller( 'PhotosCtrl', [ 
    '$scope',
    function( $scope) { 
      $scope.rawFeed = instagramResponse;
      $scope.img = "http://findicons.com/files/icons/7/dinosaurs_toys/128/stegosaurus.png";

      $scope.photosArr = [];
      $scope.filtersObj= { "All": ""};
      $scope.tagsObj= { " All": ""};
      $scope.currentFilter = "";
      $scope.selectedTags = [""];


      $scope.rawFeed.data.forEach( function(elt){
        $scope.photosArr.push({
          url: elt["images"]["standard_resolution"]["url"],
          username: elt["user"]["username"],
          date: (elt["created_time"]*1000),
          likes: elt["likes"]["count"],
          comments: elt["comments"]["count"],
          link: elt["link"],
          hashtags: elt["tags"],
          filter: elt["filter"]
        });

        $scope.filtersObj[ elt["filter"] ] = elt["filter"];
      
        if(  elt["tags"]) {
          elt["tags"].forEach( function(tag){
            $scope.tagsObj[ tag ] = tag;
          });
        }
      });

      $scope.selectFilter = function( filter ) {
        $scope.currentFilter = filter;
      };


      $scope.selectTag = function(tag) {
        console.log($scope.selectedTags)
      }

  }
]);



widgets.filter('tagFilter', function() {
  return function(collection, selectedTags) {
    var filteredCollection = [];

    console.log(selectedTags)

    if (selectedTags.indexOf("") > -1) {
      return collection;
    }

    for (var j = 0; j < collection.length; j++) {
      for (var i = 0; i < selectedTags.length; i++ ) {
        if (collection[j]["hashtags"].indexOf(selectedTags[i]) > -1) {
          filteredCollection.push(collection[j]);
        }
      }
    }
  return filteredCollection;
  }
})
