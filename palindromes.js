let first = 'A car, a man, a maraca.';
let second = 'Rats live on no evil star.';
let third = 'Lid off a daffodil.';
let fourth = 'Animal loots foliated detail of stool lamina.';
let fifth = 'A nut for a jar of tuna.'; 

function isPalindrome (word){
    const specialChar = "!@#$%^&*()_+{}[]:;<>,.?|\\/ ";

    let ptr1 = 0;
    let ptr2 = word.length-1;

    word = word.toLowerCase();

    while (ptr1 < ptr2){
        if (specialChar.includes(word[ptr1])){
            ptr1+=1;
        }else if (specialChar.includes(word[ptr2])){
            ptr2-=1;
        }else{
            if(word[ptr1] !== word[ptr2]){
                console.log("Letter: " + word[ptr1]);
                console.log("Letter2: " + word[ptr2]);
                return false;
            }
            ptr1+=1;
            ptr2-=1;
        }     
    }

    return true;
    
}

console.log(isPalindrome('racecar'));

