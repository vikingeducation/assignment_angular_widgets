var gallery = angular.module('gallery', []);

gallery.controller('PhotosCtrl',
  ['$scope',
  function($scope) {
    $scope.sample = 'Hi';
    $scope.rawFeed = instagramResponse.data;
    $scope.getDate = function(date) {
      var time = new Date( parseInt(date) );
      return time.getDay();
    }
    $scope.igURL = 'https://www.instagram.com/';
  }]);



