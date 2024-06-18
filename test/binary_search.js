function binary_search(list, item) {
  let low = 0;
  let hight = list.length - 1;

  while (low <= hight) {
    console.log("hi");

    let mid = Math.ceil((low + hight) / 2);
    let guess = list[mid];

    if (guess === item) return guess;

    if (guess > item) hight = mid - 1;
    else low = mid + 1;
  }

  return null;
}

