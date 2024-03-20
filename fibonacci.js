function fibonacci (n){
    if (n==0){
        return [0];
    }else if (n==1){
        return [1]
    }else{
        let arr = [1,1];
        
        for (let i = 2; i < n; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }

        return arr;
    }
}

const input = 6;

console.log(fibonacci(input)[input - 1]);