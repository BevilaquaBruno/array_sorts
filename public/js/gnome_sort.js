function gnome_sort(arr){
  for (var i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]){
      for( ; i > 0 && arr[i-1] > arr[i]; i--) {
        var t = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = t;
      }
    }
  }
  return arr;
}
