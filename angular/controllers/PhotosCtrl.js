app.controller("PhotosCtrl", ["$scope", "instagramResponse", function($scope, instagramResponse) {
  $scope.rawFeed = instagramResponse;

}])