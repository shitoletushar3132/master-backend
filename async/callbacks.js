function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(x);
  }
  fn();
}

fun(10, () => {
  //passed function to HOF is call callback function
  console.log("execute");
});
