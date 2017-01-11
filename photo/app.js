angular.module("InstaCopy", [])
  .controller("PhotosCtrl", ["$scope", function($scope){
    $scope.photos = instagramResponse.data;

    $scope.openUrl = function (ur) {
      $window.open(url, "_blank")
    }


  }]);
