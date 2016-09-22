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
}]);
