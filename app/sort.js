export function sort (items, field, direction){
  if (direction === 'asc') {
    return items.sort(function(a, b){
      if (a[field] < b[field]) {
        return -1
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
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
}
