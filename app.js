var widgets = angular.module('widgets', []);

widgets.controller('PhotosCtrl',
  ['$scope', function($scope){ 
    $scope.offset = 0;
    $scope.rawFeed = instagramResponse.data;
    $scope.first = $scope.rawFeed[1];

    $scope.getUrl = function(image){
      return "http://www.instagram.com/" + image.user.username
    };

    $scope.getDate = function(image){
      return new Date(parseInt(image.created_time)*1000);
    };

    $scope.allFilters = (function(){
      var filters = []
      for (var i = 0; i < $scope.rawFeed.length; i++){
        filters.push($scope.rawFeed[i].filter);
      }
      return filters
    })();

    $scope.allHashtags = (function(){
      var tags = [];
      for (var i = 0; i < $scope.rawFeed.length; i++){
        for(var j = 0; j < $scope.rawFeed[i].tags.length; j++){
          tags.push($scope.rawFeed[i].tags[j]);
        }
      }
      return tags;
    })();

    $scope.anotherPage = function(){
      return $scope.offset + 12 < $scope.totalResults;
    };

    $scope.nextPage = function(){
      $scope.offset += 12;
    }

    $scope.previousPage = function(){
      $scope.offset -= 12;
    }

    $scope.getFilter = function(choice){
      if(choice){
        return {'filter': choice};
      }
      else{
        return false;
      }
    };


    $scope.filterFilter = function(photo){
      if ($scope.filterChoice) {
        return photo.filter === $scope.filterChoice
      } else {
        return true;
      }
    };

    $scope.tagFilter = function(photo){
      if ($scope.tagChoice && $scope.tagChoice[0]) {
        var tagsClone = $scope.tagChoice.slice(0)
        for (var i = 0; i < tagsClone.length; i++) {
          if (!photo.tags.includes(tagsClone[i])) {
            return false;
          }
        }
        return true;
      } else {
        return true;
      }
    };

    $scope.totalResults = 0;
    $scope.filteredResults = function(image){
      if($scope.filterFilter(image) && $scope.tagFilter(image)){
          $scope.totalResults ++;
          return true;
        }
        else{
          return false;
        }
      // var results = [];
      // for(var i = 0; i < $scope.rawFeed.length; i++){
      //   var image = $scope.rawFeed[i];
      //   if($scope.filterFilter(image) && $scope.tagFilter(image)){
      //     results.push(image);
      //   }
      // }
      // return results;
    };

    $scope.displayFilteredResults = function() {
      var results = $(".photo-box").length;
      if (results === 1) {
        return "Showing 1 photo";
      } else {
        return "Showing " + results + " photos";
      }
    }

  }]
);


widgets.filter('unique', function() {

  return function(collection) {
    // Container for unique items
    var uniqItems = [];

    // Loop through collection
    for (var i = 0; i < collection.length; i++) {

      // Get current item
      var item = collection[i];

      // Assume it is unique
      var isUnique = true;

      // Loop through all collected
      // unique items
      for (var j = 0; j < uniqItems.length; j++) {

        // Get the current unique item
        var uniqItem = uniqItems[j];

        // The item in the collection
        // is unique if it is NOT
        // found in the unique collection
        isUnique = (uniqItem !== item);

        // Break if we know it
        // is not unique
        if (!isUnique) {
          break;
        }
      }

      // If unique push onto
      // filtered collection
      if (isUnique) {
        uniqItems.push(item);
      }
    }

    // Return filtered collection
    return uniqItems;
  };

});


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