function fetchNextElement(array) {
  let idx = 0;

  function next() {
    if (idx === array.length) {
      return undefined;
    }
    const nextElement = array[idx];
    idx++;
    return nextElement;
  }
  return { next };
}

const automaticFetcher = fetchNextElement([32, 1, 32, 1, 1, 2, 14, 4, 53, 4]);

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
