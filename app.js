// app declaration
// (declare dependencies in the brackets)
var widgets = angular.module('widgets', []);

// Restaurant controller
widgets.controller('RestaurantCtrl',
  ['$scope',
  function($scope){
    $scope.restaurants = [];
    $scope.searchTerm = "";
    $scope.sortByCol = "foodType";
    $scope.sortDir = false;
    $scope.createRestaurant = function() {
      restaurant = {};
      restaurant.name = $scope.name;
      restaurant.foodType = $scope.foodType;
      restaurant.imageLocation = $scope.imageLocation;
      $scope.restaurants.push(restaurant);
      $scope.name = "";
      $scope.foodType = "";
      $scope.imageLocation = "";
    }
    $scope.removeRestaurant = function(index) {
      $scope.restaurants.splice(index, 1);
    }
    $scope.changeSortByCol = function(thisCol) {
      if (thisCol === $scope.sortByCol){
        $scope.sortDir = !($scope.sortDir);
      } else {
        $scope.sortByCol = thisCol;
      }
    }
    $scope.colIs = function(thisCol) {
      if (thisCol === $scope.sortByCol) {
        return true
      } else {return false}
    }
  }
]);

// Photos controller
widgets.controller('PhotosCtrl',
  ['$scope', '$filter',
  function($scope, $filter){
    $scope.init = function() {
      // grab a list of all unique image filters
      // also grab a list of all unique hashtags
      // ... and user-info objs
      var filterArr = [""];
      var hashTagArr = [];
      var usersArr = [];
      $scope.images.forEach(function(image){
        if(filterArr.indexOf(image.filter) === -1) {
          filterArr.push(image.filter);
        }
        if(usersArr.indexOf(image.user) === -1) {
            usersArr.push(image.user);
          }
        image.tags.forEach(function(tag){
          if(hashTagArr.indexOf(tag) === -1) {
            hashTagArr.push(tag);
          }
        })
      });
      $scope.imageFilters = filterArr;
      $scope.hashTags = hashTagArr;
      $scope.users = usersArr;
      $scope.selectedHashTags = [];
      $scope.selectedUser = "";
      $scope.changeSelectedUser = function(user) {
        $scope.selectedUser = user;
      }
    }
    $scope.rawFeed = instagramResponse;
    $scope.images = $scope.rawFeed.data;
    $scope.currentPage = 0;
    $scope.pageSize = 4;
    $scope.filteredOutput = function(){
      output = $filter('filter')($scope.images, {filter: $scope.selectedImageFilter, user: {username: $scope.selectedUser}} );
      return $filter('hashTagFilter')(output, $scope.selectedHashTags)
    }
    $scope.numberOfPages = function(){
      return Math.ceil($scope.filteredOutput().length/$scope.pageSize)                
    }
  }
]);

// Date filter
widgets.filter('filterDate', function(){
  return function(rawDate, type) {
    var realDate = new Date(parseInt(rawDate) * 1000);
    var output = "";
    if(type === "month") {
      output = realDate.getMonth() + 1;
    } else if (type === "day") {
      output = realDate.getDate();
    } else if (type === "year") {
      output = realDate.getFullYear();
    }
    return output
  }
});

// Hashtags filter
widgets.filter('hashTagFilter', function(){
  return function(allImages, selectedHashTags) {
    output = [];
    if(selectedHashTags.length === 0) {
      output = allImages;
    } else {
      // if image's tag inc. a selected hash, add it to output
      allImages.forEach(function(image){
        if (image.tags.length > 0) {
          // only return image if it matches ALL tags
          tagsThatMatch = 0;
          image.tags.forEach(function(tag){
            if (selectedHashTags.indexOf(tag) !== -1) {
              tagsThatMatch += 1;
            }
          })
          if (tagsThatMatch === selectedHashTags.length && output.indexOf(image) === -1) {
            output.push(image);
          }
        }
      })
    }
    return output
  }
});

// "Start From" pagination filter
widgets.filter('startFrom', function() {
    return function(allImages, start) {
      start = +start; //parse to int
      return allImages.slice(start);
    }
});