var widgets = angular.module('widgets', []);

widgets.controller("PhotosCtrl", ['$scope', function($scope) {
  $scope.rawFeed = instagramResponse;

  $scope.getFilters = function(){
    var filters = [];
    for(var i = 0; i < $scope.rawFeed["data"].length; i++){
      var currPhoto = $scope.rawFeed["data"][i];
      filters.push(currPhoto["filter"]);
    }
    return filters;
  };

  $scope.setFilter = function(filt){
    console.log(filt)
  }
}]);
