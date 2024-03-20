let numbers = [1,2,3,4,5,6,7,8,9,10];

// ORIGINAL
function sumOfTripledEvens(arr){
    let total = 0;

    // for...in loop checks for indexes, not items.
    arr.forEach( (item) => {
        if (item % 2 == 0){
            total += item*3;
        }
    })

    return total;
}

console.log(sumOfTripledEvens(numbers)); //answer should be 90

//MAP/Filter/Reduce Method
function isEven (item){
    if (item % 2 == 0){
        return true;
    }

    return false;
}
// Filters for even numbers
numbers = numbers.filter(isEven);
console.log(numbers);
// multiplies the array items by 3
numbers = numbers.map( (item) => item * 3);
console.log(numbers);
// returns the sum
let final = numbers.reduce((total, item) => total += item, 0);
console.log(final);


