var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl', 
  ['$scope', function($scope){
    $scope.sortReverse = true;
    $scope.sortCol = '';
    $scope.restaurants = [];
    $scope.name = "";
    $scope.type = "";
    $scope.picture = "";

    $scope.search = "";
    $scope.createRestaurant = function(){
      var restaurant = {};
      restaurant.name = $scope.name;
      restaurant.foodType = $scope.type;
      restaurant.picture = $scope.picture;

      $scope.restaurants.push(restaurant);

      $scope.name = "";
      $scope.type = "";
      $scope.picture = "";
    };

    $scope.removeRestaurant = function(index){
      $scope.restaurants.splice(index, 1);
    };
  }]);




widgets.controller('PhotosCtrl',
  ['$scope', function($scope){

    $scope.rawFeed = instagramResponse;
    $scope.selectedFilter = "";
    $scope.selectedUser = "";
    $scope.selectedHashtags = [];
    $scope.allImages = [];
    $scope.filters = [];
    $scope.hashtags = [];
    $scope.users = [];

    $scope.filterByTags = function(image){
      if($scope.selectedHashtags.length > 0){
        var imageTags = image.hashtags;

        
        for(var i = 0; i < $scope.selectedHashtags.length; i++){
          var tag = $scope.selectedHashtags[i];
          if(imageTags.indexOf(tag) === -1){
            return false;
          }
        }
          
        
        
      } 

      return true;
      

    };

    for(var i = 0; i < $scope.rawFeed.data.length; i++){
      var data = $scope.rawFeed.data[i];
      var userData = data.user;
      var image = {};
      var user = {};

      image.url = data.images.thumbnail.url;
      image.user = data.user.username;
      image.time = data.created_time;
      image.likes = data.likes.count;
      image.comments = data.comments.count;
      image.link = data.link;
      image.filter = data.filter;
      image.hashtags = data.tags;

      user.userName = userData.username;
      user.profilePicture = userData.profile_picture;
      user.fullName = userData.full_name

      $scope.users.push(user);
      $scope.hashtags = $scope.hashtags.concat(image.hashtags);
      $scope.filters.push(image.filter);
      $scope.allImages.push(image);
    };

    $scope.images = $scope.allImages;

    $scope.currentPage = 1;

    $scope.$watch("currentPage", function(){
      var first = ($scope.currentPage - 1) * 12;
      var last = first + 12;

      $scope.images = $scope.allImages.slice(first, last)
    });

  }]);