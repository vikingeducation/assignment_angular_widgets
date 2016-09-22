app.controller("PhotosCtrl", ["$scope", "instagramResponse", function($scope, instagramResponse) {
  $scope.rawFeed = instagramResponse;
  $scope.tags = (function(){
    var tagList = [];
    for(var i = 0; i < $scope.rawFeed.data.length; i++){
      for(var j = 0; j < $scope.rawFeed.data[i].tags.length; j++){
        tagList.push($scope.rawFeed.data[i].tags[j]);
      }
    }
    return tagList;
  })();
  $scope.filters = (function(){
    var filterList = [];
    for(var i = 0; i < $scope.rawFeed.data.length; i++){
      filterList.push($scope.rawFeed.data[i].filter);
    }
    return filterList;
  })();
}]);

app.filter('tagFilter', function(){
  return function( collection, selectedTags ){

    var filteredCollection = [];

    angular.forEach(collection, function(photo){
      for(var i= 0; i < selectedTags.length; i++){



        photo.tags
      }
    }

  }

})
