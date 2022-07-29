//Assignment 1: Function and Array
function max(numbers) {
  const theMax = numbers.reduce((highest, num) => {
    if (highest > num) {
      return highest;
    }
    return num;
  });
  return theMax;
}

//Assignment 2: Object
function calculateAss2(args) {
  var result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

//Assignment 3: Function, Array, and Object
function calculateAss3(data) {
  const total = data.products.reduce((sum, item) => {
    var p = sum + item.price * (1 - data.discount);
    return p;
  }, 0);
  return total;
}

const discountedPrice = calculateAss3({
  discount: 0.1,
  products: [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 700 },
    { name: "Product 3", price: 250 },
  ],
});

console.log(discountedPrice); //show the total price of all products after applying a discount

//Assignment 4: Algorithm Practice
function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

//Assignment 5: Callback Function

function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(function () {
    callback(n1 + n2);
  }, delayTime - 1000);
}

// delayedResult(4, 5, 3000, function(result) {
//     console.log(result);
// }); // 9 (4+5) will be shown in the console after 3 seconds

// delayedResult(-5, 10, 2000, function(result) {
//     window.alert(result);
// }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds
