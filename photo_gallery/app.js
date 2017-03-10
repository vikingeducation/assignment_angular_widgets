var gallery = angular.module('gallery', []);

gallery.controller('PhotosCtrl',
  ['$scope',
  function($scope) {
    $scope.sample = 'Hi';
    $scope.rawFeed = instagramResponse.data;
    $scope.igURL = 'https://www.instagram.com/';
    $scope.filterList = function() {
      var filters = [];
      for(var i = 0; i < this.rawFeed.length; i++) {
        var filt = this.rawFeed[i].filter;
        if ( !filters.includes(filt) ) {
          filters.push(filt);
        }
      }
      return filters;
    };
    $scope.tagList = function() {
      var tagList = [];
      for(var i = 0; i < this.rawFeed.length; i++) {
        var tags = this.rawFeed[i].tags;
        tags.forEach(function(tag) {
          if (!tagList.includes(tag)) {
            tagList.push(tag);
          }
        });
      }
      return tagList;
    };
    $scope.pageNum = 0;
    $scope.pageValue = "more >>";
    $scope.changePage = function() {
      if ( this.pageNum === 0 ) {
        this.pageNum++;
        this.pageValue = "<< back";
      } else {
        this.pageNum--;
        this.pageValue = "more >>";
      }
    }
  }]);

// gallery.factory('_', [$window, function($window) {
//   return $window._;
// }]);

gallery.filter('filterTags', function() {
  return function( collection, tags ) {
    if ( !tags ) { return collection }
    var filteredCollection = [];

    angular.forEach( collection, function(post) {
      angular.forEach( tags, function(tag) {
        if ( post.tags.includes(tag) && !filteredCollection.includes(post)) {
          filteredCollection.push(post);
        }
      })
    })

    return filteredCollection;
  }
});



