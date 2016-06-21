export function sortAsc (items, field){
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

export function sortDesc (items, field){
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
