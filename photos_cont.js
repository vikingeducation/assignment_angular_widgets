widgets.controller('PhotosCtrl', ['$scope', function($scope){

  $scope.rawFeed = instagramResponse;

  // $scope.rawFeed.data[0].images.standard_resolution.url
  //                                thumbnail         .width
  //                                low_resolution    .height


  $scope.translateDate = function(timestamp) {
    return new Date(timestamp * 1000);
  };

  $scope.getUserProfilePage = function(user) {
    return "https://www.instagram.com/" + user + "/";
  };

  
  $scope.filters = {};
  $scope.hashTags = {};

  // initialize
  for(var i = 0; i < $scope.rawFeed.data.length; i++) {
      // filters
    $scope.filters[$scope.rawFeed.data[i].filter] = $scope.rawFeed.data[i].filter;
    
    for(var j = 0; j < $scope.rawFeed.data[i].tags.length; j++) {
      // hash tags
      $scope.hashTags[$scope.rawFeed.data[i].tags[j]] = $scope.rawFeed.data[i].tags[j];
    }
  }


}]);