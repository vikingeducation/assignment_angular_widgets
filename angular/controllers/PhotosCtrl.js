app.controller("PhotosCtrl", ["$scope", "instagramResponse", function($scope, instagramResponse) {
  $scope.rawFeed = instagramResponse;
  $scope.tags = (function(){
    var tagList = [];
    for(var i = 0; i < $scope.rawFeed.data.length; i++){
      for(var j = 0; j < $scope.rawFeed.data[i].tags.length; j++){
        tagList.push($scope.rawFeed.data[i].tags[j]);
      }
    }
    return tagList;
  })();
  $scope.filters = (function(){
    var filterList = [];
    for(var i = 0; i < $scope.rawFeed.data.length; i++){
      filterList.push($scope.rawFeed.data[i].filter);
    }
    return filterList;
  })();

  $scope.comparePhotoAndSelectedTags = function (photoTag, selectedTags) {
    for(var i= 0; i < selectedTags.length; i++) {
      var thisSelectedTag = selectedTags[i];
      if (thisSelectedTag === photoTag) {
        return true
      }
    }
    return false
  }

}]);

app.filter('filterMultipleTags', function() {

  var comparePhotoAndSelectedTags = function (photoTag, selectedTags) {
    for(var i= 0; i < selectedTags.length; i++) {
      var thisSelectedTag = selectedTags[i];
      if (thisSelectedTag === photoTag) {
        return true
      }
    }
    return false
  };

  return function(collection, selectedTags){

    if (!selectedTags) return [];

    var filteredCollection = [];

    angular.forEach(collection, function(photo){
      if (photo.tags.length) {
        filteredCollection.push(photo);
        console.log(filteredCollection[0]); // why is filtered collection always empty?
        for (var j = 0; j < photo.tags.length; j++) {
          var thisPhotoTag = photo.tags[j];

          var represented = comparePhotoAndSelectedTags(thisPhotoTag, selectedTags);
          console.log(represented);
        }
          // console.log(filteredCollection[0]);  
      }
      if (!represented) {
        filteredCollection.pop();
      }    
    }
      )
    console.log(filteredCollection);
    return filteredCollection;
  }
})

