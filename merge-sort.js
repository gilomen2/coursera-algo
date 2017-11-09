function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  if(arr.length === 2) {
    if(arr[1] < arr[0]) {
      return [arr[1], arr[0]]
    } else {
      return arr;
    }
  }

  var sortedLeft = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  var sortedRight = mergeSort(arr.slice(sortedLeft.length, arr.length));


  var left = 0;
  var right = 0;

  var sortedArray = [];

  for(var k = 0; k < arr.length; k++) {
    if(left < sortedLeft.length && right < sortedRight.length) {
      if(sortedLeft[left] < sortedRight[right]) {
        sortedArray[k] = sortedLeft[left];
        left++;
      } else {
        sortedArray[k] = sortedRight[right];
        right++;
      }
    } else {
      if(left < right) {
        sortedArray[k] = sortedLeft[left];
        left++;
      } else {
        sortedArray[k] = sortedRight[right];
        right++;
      }
    }
  }


  return sortedArray;
}

console.log(mergeSort([5,4,1,8,7,2,6,3]));