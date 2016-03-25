// ----------------------------------------
// PhotosCtrl
// ----------------------------------------


Widgets.controller('PhotosCtrl', ['$scope', function($scope) {

  // Filters
  $scope.filterType = '';
  $scope.filterTypes = [];
  $scope.filterUsers = [];
  $scope.filterTags = [];
  $scope.tags = [];

  // Get photos
  $scope.feed = instagramResponse['data'];
  $scope.photos = $scope.feed.map(function(object) {

    // FilterTypes
    if ( $scope.filterTypes.indexOf(object.filter) < 0) {
      $scope.filterTypes.push(object.filter);
    }

    // Tags
    var tags = object.tags;
    for (var j = 0; j < tags.length; j++) {
      var tag = tags[j];
      if ($scope.tags.indexOf(tag) < 0) {
        $scope.tags.push(tag);
      }
    }

    // Map Photo Objects
    return {
      profileUrl: 'http://instagram.com/' + object['user']['username'],
      username: object['user']['username'],
      fullName: object['user']['full_name'],
      url: object['images']['standard_resolution']['url'],
      tags: object['tags'],
      filter: object['filter'],
      createdAt: new Date(parseInt(object['created_time'])).toDateString(),
      link: object['link']
    };
  });

  // Filtering
  $scope.filterPhoto = function(photo) {

    // if no filter type selected
    // else

    if ($scope.filterType === '' &&
        ($scope.filterTags.length === 0 || $scope.filterTags.length === 1 && $scope.filterTags[0] === '') &&
        ($scope.filterUsers.length === 0 || $scope.filterUsers.length === 1 && $scope.filterUsers[0] === '')) {
      return true;
    }

    var hasFilter = photo.filter === $scope.filterType,
        hasTag = hasUser = false;

    for (var i = 0; i < $scope.filterTags.length; i++) {
      var tag = $scope.filterTags[i];
      hasTag = !!~photo.tags.indexOf(tag);
      if (hasTag) break;
    }

    for (var i = 0; i < $scope.filterUsers.length; i++) {
      var user = $scope.filterUsers[i];
      hasUser = photo.username == user;
      if (hasUser) break;
    }

    console.log(hasFilter, hasTag, hasUser);

    return hasFilter || hasTag || hasUser;
  };


  // Pagination
  $scope.page = 0;
  $scope.pageSize = 12;


  // Users
  $scope.users = $scope.feed.map(function(object) {
    return object['user'];    
  });

}]);




