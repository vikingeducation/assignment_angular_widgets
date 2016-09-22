widgets.filter('hashtagFilter', ['_', function() {

  // Collection is all the pictures.
  // Hashtagsfilter is the filter that we input by selecting tags.
  return function(collection, hashtagsFilter) {
    if ( !hashtagsFilter || !hashtagsFilter.length) {
      return collection;
    }
    var filteredCollection = [];
    // Iterate through the entire collection of pictures.
    angular.forEach(collection, function(picture) {
      if (_.intersection(picture.hashtags, hashtagsFilter).length) {
        filteredCollection.push(picture);
      }
    });
    return filteredCollection;
  };
}]);
