angular.module("InstaCopy", [])
  .controller("PhotosCtrl", ["$scope", function($scope){
    $scope.photos = instagramResponse.data;


  }]);
