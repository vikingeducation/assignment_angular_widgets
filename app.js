var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function() {
  return $window._;
}]);

var widgets = angular.module('widgets', ['underscore']);
widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
      $scope.restaurants = [{name: "Starbucks", foodType: "Coffee", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1024px-Starbucks_Coffee_Logo.svg.png"},
                            {name: "Philz", foodType: "Coffee", logo: "https://pbs.twimg.com/profile_images/615957761256337409/P13O4djR.png"},
                            {name: "Chipotle", foodType: "Mexican", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/480px-Chipotle_Mexican_Grill_logo.svg.png"}
                            ];
      $scope.sortType = 'foodType';
      $scope.sortReverse = false;

      $scope.addRestaurant = function() {
        $scope.restaurants.push({name: $scope.name, foodType: $scope.foodType, logo: $scope.logo})
        $scope.name = '';
        $scope.foodType = '';
        $scope.logo = '';
      };
      $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        console.log(index);
        $scope.restaurants.splice(index, 1);
      };
      $scope.toggleSort = function(field) {
        if (field == $scope.sortType) {
          $scope.sortReverse ? $scope.sortReverse = false : $scope.sortReverse = true;
          return;
        }
        $scope.sortType = field;
      }
      $scope.sortCaret = function(sortType, sortReverse) {
        if(sortType == $scope.sortType && sortReverse == $scope.sortReverse) {
          return true;
        }
      }
    }]
);

widgets.filter('tagFilter', function() {
  return function( collection, target ) {
    if (!target || target == '') return collection;
    var filteredCollection = []
    angular.forEach( collection, function( photo ){
      if( _.intersection(photo.tags, _.flatten(target)).length > 0) {
        filteredCollection.push( photo );
      }
    })
    return filteredCollection;
  };
});

widgets.filter('userFilter', function() {
  return function( collection, targetUser ) {
    if (!targetUser || targetUser == '') return collection;
    var filteredCollection = []
    angular.forEach( collection, function( photo ){
      if( photo.user_id == targetUser.id) {
        filteredCollection.push( photo );
      }
    })
    return filteredCollection;
  };
});

widgets.controller('PhotoCtrl',
  ['$scope',
  function($scope){
    $scope.Math = window.Math;
    $scope.rawFeed = instagramResponse;
    $scope.photos = [];
    $scope.filters = [];
    $scope.tags = [];
    $scope.users = [];
    $scope.page = 0;
    $scope.userToFilter = '';
    $scope.rawFeed.data.forEach(function(data) {
      if (data.caption != null) {
        $scope.filters.push(data.filter);
        $scope.tags.push(data.tags);
        $scope.photos.push({
          username: data.caption.from.username,
          created_at: Number(data.caption.created_time) * 1000,
          url: data.images["low_resolution"].url,
          likes_count: data.likes.count,
          comments_count: data.comments.count,
          filter: data.filter,
          instagram_link: data.link,
          tags: data.tags,
          user_id: data.user.id
        });
        $scope.users.push({
          username: data.user.username,
          fullname: data.user.full_name,
          id: data.user.id,
          profile_picture: data.user.profile_picture
        })
        $scope.tags.push('');
        $scope.tags = _.sortBy(_.uniq(_.flatten($scope.tags)));
        $scope.filters.push('');
        $scope.filters = _.sortBy(_.uniq($scope.filters));
      }
    });
    $scope.userlink = function(photo) {
      return 'https://www.instagram.com/'+photo.username+'/'
    };
    $scope.nextPage = function(filteredLength) {
      $scope.page += 1;
      var maxPage = Math.floor(filteredLength/ 12);
      if ($scope.page > maxPage) $scope.page = maxPage;
    };
    $scope.prevPage = function() {
      $scope.page -= 1;
      if ($scope.page < 0) $scope.page = 0;
    };
    $scope.selectedUser = function(user) {
      $scope.userToFilter  = ($scope.userToFilter == user) ? '' : user;
      console.log(user);
    };
  }]
);