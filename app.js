var widgets = angular.module('widgets', []);

widgets.controller('PhotosCtrl',
  ['$scope', function($scope){

    $scope.rawFeed = instagramResponse.data;
    $scope.first = $scope.rawFeed[1];

    $scope.getUrl = function(image){
      return "http://www.instagram.com/" + image.user.username
    };

    $scope.getDate = function(image){
      return new Date(parseInt(image.created_time)*1000);
    };

  }]
);


// username image.user.username
// user url "www.instagram.com/" + image.user.username
// caption image.caption.text
// photo url image.images.standard_resolution.url 
// instagram page, image.link
// hashtag info, image.tags -- array
// posttime image.created_time
// filter info, image.filter
// like count, image.likes.count
// comment count image.comments.count


widgets.controller("RestaurantCtrl",
  ['$scope',
  function($scope){
    $scope.restaurants = [
      {
        name: "Arby's",
        foodType: "Burgers"
      },
      {
        name: "Bertucci's",
        foodType: "Pizza"
      },
      {
        name: "Chili's",
        foodType: "Tex-Mex"
      },
      {
        name: "Denny's",
        foodType: "Brunch"
      }

    ];
    $scope.makeRest = function(){
      var rest = $scope.formData;
      rest.id = $scope.restaurants.length;
      $scope.restaurants.push(rest);
      $scope.formData = {};
    };

    $scope.removeRest = function(restaurant){
      $scope.restaurants.splice(restaurant.id, 1);
    };

    $scope.orderProp = "";

    $scope.setOrder = function(prop){
      console.log("reaching controller");
      if($scope.orderProp == prop){
        $scope.orderProp = "-"+prop;
      }
      else{
        $scope.orderProp = prop;
      }
    };
  }]);