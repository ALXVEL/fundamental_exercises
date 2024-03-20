function addArr (arr,b){
    return arr.map( (item) => item + b);
}

function subArr (arr,b){
    return arr.map( (item) => item - b);
}

function mulArr (arr){
    return arr.reduce( (total, item) => total *= item, 1);
}

function sumArr (arr){
    return arr.reduce( (total, item) => total += item, 0);
}

function factorial(n){
    if (n == 0){
        return 1;
    }

    return n * factorial(n-1);
}

function power(n,b){
    let result = 1;
    while (b != 0){
        result *= n;
        b-=1;
    }
    return result;
}

function powerArr (arr){
    return arr.map( (item) => power(item, 2));
}

function factArr (arr){
    return arr.map( (item) => factorial(item));
}

let arr = [1,2,3,4,5];

console.log("This is adding: " + addArr(arr, 2));
console.log("This is subtracting " + subArr(arr, 2));
console.log("This is multiplying: " + mulArr(arr));
console.log("This is sum " + sumArr(arr));
console.log("This is factorial " + factArr(arr));
console.log("This is power " + powerArr(arr));