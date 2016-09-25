var widgets = angular.module("widgets", []);

widgets.filter("customPagination", function() {

  return function(photos, page) {
    var pages = [];
    pages = photos.slice((page - 1) * 12, page * 12);
    return pages;
  };
});


widgets.filter("photoUserFilter", function() {

  return function(photos, user) {
    if (!user) {
      return photos;
    }
    var filteredPhotos = [];
    for(var i = 0; i < photos.length; i++) {
      if(photos[i].user.username === user) {
        filteredPhotos.push(photos[i]);
      }
    }
    return filteredPhotos;
  };
});






widgets.filter('photoFilter', function() {

  return function (photos, searchTags) {
    console.log(photos);
    var filteredPhotos = photos.filter(function(photo) {
      var tags = photo.tags;
      for(var i in tags) {
         if ( searchTags.includes(tags[i]) ) {
          return true;
         }
      }
      return false;
    });
    return filteredPhotos;
  };

});

//     for (var photo in photos) {
//       var tags = photo.tags;
//       console.log(tags)
//       console.log(searchTags)

//       for (var tag in tags) {
//         if ( searchTags.includes(tag) ) {
//           filteredPhotos.push(photo);
//           break;
//         }
//       }
//     }
//     return filteredPhotos;
//   };



widgets.filter('photoFilter');