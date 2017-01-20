var widgets = angular.module('widgets', []);

widgets.controller("PhotosCtrl", ['$scope', function($scope) {
  $scope.rawFeed = instagramResponse;
  $scope.photoList = $scope.rawFeed['data'];
  $scope.beginPage = 0;

  $scope.getFilters = function(){
    var filters = [];
    for(var i = 0; i < $scope.rawFeed["data"].length; i++){
      var currPhoto = $scope.rawFeed["data"][i];
      filters.push(currPhoto["filter"]);
    }
    return filters;
  };

  $scope.getHashtags = function() {
    var hashtags = [];
    for(var i = 0; i < $scope.rawFeed["data"].length; i++){
      var currPhoto = $scope.rawFeed["data"][i];
      for (var j = 0; j < currPhoto["tags"].length; j++) {
        hashtags.push(currPhoto["tags"][j]);
      }
    }
    return hashtags;
  };

  $scope.resetFilters = function(){
    $scope.photoList = $scope.rawFeed['data'];
    $scope.selectedFilter = undefined;
    $scope.selectedHashtags = undefined;
  };

  $scope.adjustPage = function(adjustment) {
    if (!($scope.beginPage === 0 && adjustment < 0)) {
      $scope.beginPage += adjustment;
      console.log('adjusting!');
    }
  };
}]);
