function binarySearchRecursion(arr, target, low, high) {
  if (low > high) {
    return false;
  }

  let mid = ((low + high) / 2);

  if (target == arr[mid]) {
    return true;
  } else if (target < arr[mid]) {
    return binarySearchRecursion(arr, target, low, mid - 1);
  } else {
    return binarySearchRecursion(arr, target, mid + 1, high);
  }
}

const arrNum = [14, 19, 22, 44, 69, 102, 199];

binarySearchRecursion(arrNum, 102, 0, 6);

