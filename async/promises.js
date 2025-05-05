// how we can create a promise?
function createPromise() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 100000000; i++) {}

    let num = Math.random() * 10;
    if (num % 2 == 0) {
      resolve();
    } else {
      reject();
    }
  });
}

// how can we consume a promise?

/* 
 promises object contains

 value:undefined
 state:pending
 onfullfill:[]
 onreject:[]
*/
// x = createPromise()
//   .then(
//     function () {
//       //registers as onfullfill in array in the promimse object
//       console.log("Promise resolved: Even number generated");
//     },
//     function () {
//       //registers as onreject in array promimse object
//       console.log("reject");
//     }
//   )
//   .catch(function () {
//     console.log("Promise rejected: Odd number generated");
//   });

/**
 * there is a two queues in the background
 * one is micro and macro
 * the macro should called as also callback queue
 * the most priority is give to the micro queue....
 * the event loop should be execute the first micro
 * then the macro
 */

function download(url) {
  console.log("downloading");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(url);
      console.log("downloaded");
    }, 3000);
  });
}

const down = download("xyz").then((value) => {
  console.log(value);
});

// callback
function download(url, callback) {
  console.log("downloading");
  setTimeout(() => {
    console.log("downloaded");
    callback(url);
  }, 3000);
}

// Usage:
download("xyz", function (value) {
  console.log(value);
});
