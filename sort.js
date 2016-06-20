var sortAsc = function (items, field){
  return items.sort(function(a, b){
    if (a[field] < b[field]) {
      return -1
    } else if (a[field] > b[field]) {
      return 1;
    } else {
      return 0;
    }
  });
}

var sortDesc = function (items, field){
  return items.sort(function(a, b){
    if (a[field] > b[field]) {
      return -1
    } else if (a[field] < b[field]) {
      return 1;
    } else {
      return 0;
    }
  });
}
