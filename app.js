var widgets = angular.module("widgets", []);

widgets.filter('photoTags', function() {

  return function(photos) {
    var filteredPhotos = [];
    
    for (var photo in photos) {
      var tags = photo.tags;
      console.log(tags)
      console.log($scope.searchTags)

      for (var tag in tags) {
        if ( $scope.searchTags.includes(tag) ) {
          filteredPhotos.push(photo);
          break;
        }
      }
    }
    return filteredPhotos;
  };

});

widgets.filter('photoFilter');