function* fetchNextElement() {
  console.log("i am inside the generator function");
  yield 1;
  yield 2;
  console.log("middle");
  yield 4;
}

const x = fetchNextElement();
