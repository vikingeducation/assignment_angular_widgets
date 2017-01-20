widgets.filter('unique', function(){
  return function(items){
    var uniqItems = [];

    for(var i = 0; i< items.length; i++){
      var item = items[i];
      var isUnique = true;

      for(var j = 0; j < uniqItems.length; j++){
        var uniqItem = uniqItems[j];
        isUnique = (uniqItem !== item);

        if (!isUnique){
          break;
        }
      }

      if(isUnique){
        uniqItems.push(item);
      }
    }

    return uniqItems;
  };
});

widgets.filter('tagFilter', function(){
  return function(collection, selectedTags){

    // if user has not selected any hashtags, just show the entire collection
    if (selectedTags === undefined) { return collection; }

    // put all selected hashtags into a hash, for easy lookup later
    var selectedTagHash = {};
    for (var h = 0; h < selectedTags.length; h++) {
      selectedTagHash[selectedTags[h]] = selectedTags[h];
    }

    // build a filteredCollection of photos
    var filteredCollection = [];

    // iterate through each photo, then find those whose tags are in the selected hashtags
    for (var i = 0; i < collection.length; i++) {
      var objTagList = collection[i]['tags'];

      // if there are no tags, go to the next photo
      if (objTagList === undefined) { continue; }

      // if the hashtags on the photo match the selected hashtags, add the photo to the returned collection
      for (var j = 0; j < objTagList.length; j++) {
        if (selectedTagHash[objTagList[j]]) {
          filteredCollection.push(collection[i]);
          break;
        }
      }
    }

    return filteredCollection;
  };
});


widgets.filter('userFilter', function(){
  return function(collection, username){

    if(username === undefined){
      return collection;
    }

    var filteredCollection = [];

    for(var i = 0; i < collection.length; i++){
      if(collection[i]["user"]["username"] === username){
        filteredCollection.push(collection[i]);
      };
    }

    return filteredCollection;
  };
});
