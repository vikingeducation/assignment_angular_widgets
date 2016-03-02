// custom pagination filter
Widgets.filter('startFrom', function() {
  return function(collection, start) {
    // start = parseInt(start);
    console.log(start)
    return collection.slice(start);
  }
});


Widgets.controller('PhotosCtrl', ['$scope', function($scope) {

  // feed
  $scope.feed = instagramResponse['data'];
  $scope.photos = $scope.feed.map(function(object) {
    return {
      profileUrl: 'http://instagram.com/' + object['user']['username'],
      username: object['user']['username'],
      url: object['images']['standard_resolution']['url'],
      tags: object['tags'],
      filter: object['filter'],
      createdAt: new Date(parseInt(object['created_time'])).toDateString(),
      link: object['link']
    };
  });

  // filters
  $scope.filterType = '';
  $scope.filterTypes = [];
  $scope.filterTags = [];
  $scope.tags = [];

  for (var i = 0; i < $scope.feed.length; i++) {
    var object = $scope.feed[i];
    for (var key in object) {

      // filterTypes
      if (key == 'filter' && $scope.filterTypes.indexOf(object[key]) < 0) {
        $scope.filterTypes.push(object[key]);
      }

      // tags
      if (key == 'tags') {
        var tags = object[key];
        for (var j = 0; j < tags.length; j++) {
          var tag = tags[j];
          if ($scope.tags.indexOf(tag) < 0) {
            $scope.tags.push(tag);
          }
        }
      }
    }
  }

  // filtering
  $scope.filterPhoto = function(photo) {
    if ($scope.filterType == '' &&
        $scope.filterTags.length == 0) {
      return true
    }

    var hasTag = false;
    for (var i = 0; i < $scope.filterTags.length; i++) {
      var filterTag = $scope.filterTags[i];
      for (var j = 0; j < photo.tags.length; j++) {
        var photoTag = photo.tags[j];
        if (filterTag == photoTag) {
          hasTag = true;
          break;
        }
      }
      if (hasTag) {
        break;
      }
    }

    var hasFilter = photo.filter == $scope.filterType;

    return hasFilter || hasTag;
  };


  // pagination
  $scope.page = 0;
  $scope.pageSize = 12;


}]);




