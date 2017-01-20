var widgets = angular.module('widgets', []);

widgets.controller("PhotosCtrl", ['$scope', function($scope) {
  $scope.rawFeed = instagramResponse;
}]);
