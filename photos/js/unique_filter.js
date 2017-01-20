widgets.filter('unique', function(){
  return function(items){
    var uniqItems = [];

    for(var i = 0; i< items.length; i++){
      var item = items[i]
      var isUnique = true

      for(var j = 0; j < uniqItems.length; j++){
        var uniqItem = uniqItems[j]
        isUnique = (uniqItem !== item);

        if (!isUnique){
          break;
        };

      };
      if(isUnique){
        uniqItems.push(item)
      }

    };
    return uniqItems
  }
})