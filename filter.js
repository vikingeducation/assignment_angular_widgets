widgets.filter('hashtagFilter', ['_', function() {

  return function(collection, hashtagsFilter) {
    if ( !hashtagsFilter ) {

      return collection
    }
    var filteredCollection = []
    angular.forEach(collection, function(picture) {

      if (_.intersection(picture.hashtags, hashtagsFilter).length) {
        filteredCollection.push(picture)
      }
    })
    return filteredCollection;
  };
}])
