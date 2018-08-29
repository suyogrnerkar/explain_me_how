// Best time to buy or sell stock:

// Given an array with the stock prices per day, as a list
// write an algorithm to compute the max profit
// -  Can buy or sell only one stock per day, not both
// -  Days are always in forward order, so [7 & 1]
//    wouldn't be a valid pair.

let
  input_one = [7, 1, 5, 6, 2, 3],
  input_two = [7, 5, 4, 1, 0];

function profit(prices_list) {
  if (prices_list.length == 0) {
    return 0;
  }

  let
    min_buy_price = prices_list[0],
    max = 0;

  for (let elem of prices_list) {
    if (elem > min_buy_price) {
      // Max of current max profit and
      // (current sales price - minimum buy price)
      max = Math.max(max, elem - min_buy_price);
    } else {
      min_buy_price = elem;
    }
  }
  return max;
}

console.log(profit(input_one));
console.log(profit(input_two));
