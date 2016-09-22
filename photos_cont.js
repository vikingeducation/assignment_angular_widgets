widgets.controller('PhotosCtrl', ['$scope', function($scope){

  $scope.rawFeed = instagramResponse;

  // $scope.rawFeed.data[0].images.standard_resolution.url
  //                                thumbnail         .width
  //                                low_resolution    .height


  $scope.translateDate = function(timestamp) {
    return new Date(timestamp * 1000);
  };

}]);