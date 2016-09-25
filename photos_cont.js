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

  $scope.downPage = function() {
    if ($scope.page > 1) {
      $scope.page--;
    }
  };

  $scope.upPage = function() {
    if ($scope.page < $scope.rawFeed.data.length / 12) {
      $scope.page++;
    }
  };

  $scope.changeUserFilter = function(name) {
    $scope.userFilter = name;
  }

  $scope.clearUserFilter = function() {
    $scope.userFilter = "";
  }

  
  $scope.filters = {};
  $scope.hashTags = {};
  $scope.users = {};
  $scope.page = 1;

  // initialize
  for(var i = 0; i < $scope.rawFeed.data.length; i++) {
      // filters
    $scope.filters[$scope.rawFeed.data[i].filter] = $scope.rawFeed.data[i].filter;
    var user = $scope.rawFeed.data[i].user;
    $scope.users[user.username] = {
      username: user.username,
      profile_picture: user.profile_picture,
      url: $scope.getUserProfilePage(user.username),
      full_name: user.full_name
    };
    
    for(var j = 0; j < $scope.rawFeed.data[i].tags.length; j++) {
      // hash tags
      $scope.hashTags[$scope.rawFeed.data[i].tags[j]] = $scope.rawFeed.data[i].tags[j];
    }
  }


}]);