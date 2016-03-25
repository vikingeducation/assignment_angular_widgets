var widgets = angular.module('widgets', ['angular.filter']);

widgets.controller('RestaurantCtrl',
['$scope',
  function($scope) {
    $scope.headers = ['name', 'foodType', 'Delete', 'Image'];
    $scope.restaurants = [];
    $scope.orderHeading = 'name';
    $scope.createRestaurant = function() {
      var newObj = {};
      newObj.name = $scope.name;
      newObj.foodType = $scope.foodType;
      $scope.restaurants.push(newObj);
      $scope.name = "";
      $scope.foodType = "";
    };
    $scope.removeRestaurant = function(restaurant) {
      $scope.restaurants.splice($scope.restaurants.indexOf(restaurant), 1);
    };


    $scope.orderByHeading = function(index) {
      $scope.orderHeading = $scope.headers[index];
    };
  }
]);


widgets.controller('PhotosCtrl', ['$scope', function($scope){
  $scope.rawFeed = instagramResponse.data;
  $scope.currentPage = 0;
  $scope.hashtags = function(){
    var tagArray = [];
    $scope.rawFeed.forEach(function(obj){
      if(obj.tags.length > 0){
        for(var i = 0; i <obj.tags.length; i++){
          tagArray.push(obj.tags[i]);
        }
      }
    });
    return tagArray;
  };

  var setFilter = function(){
    $scope.filterPhotos = $scope.rawFeed.filter(function(obj, index){
      if(index > $scope.currentPage * 12 - 1 && index < ($scope.currentPage + 1) * 12){
        console.log(index);
        return true;
      }
      else {
        return false;
      }
    });
  };

  var setPhoto = function(){
    $scope.photos = $scope.filterPhotos.map(function(obj){
      return {
        url: obj.images.low_resolution.url,
        username: obj.user.username,
        createdAt:  obj.created_time,
        likes: obj.likes.count,
        comments: obj.comments.count,
        photoLink: obj.link,
        tags: obj.tags.join(', '),
        filter: obj.filter
      };
    });
  };

  $scope.filterPhotos = $scope.rawFeed.filter(function(obj, index){
    if(index > $scope.currentPage * 12 - 1 && index < ($scope.currentPage + 1) * 12){
      return true;
    }
    else {
      return false;
    }
  });

  $scope.addPage = function(){
    console.log('works', $scope.currentPage);
    if($scope.currentPage <= ($scope.rawFeed.length / 12) -1){
      $scope.currentPage += 1;
      setFilter();
      setPhoto();
    }
  };

  $scope.subPage = function(){
    console.log('works', $scope.currentPage);
    if($scope.currentPage > 0){
      $scope.currentPage -= 1;
      setFilter();
      setPhoto();
    }
};

  $scope.photos = $scope.filterPhotos.map(function(obj){
    return {
      url: obj.images.low_resolution.url,
      username: obj.user.username,
      createdAt:  obj.created_time,
      likes: obj.likes.count,
      comments: obj.comments.count,
      photoLink: obj.link,
      tags: obj.tags.join(', '),
      filter: obj.filter
    };
  });
}]);
