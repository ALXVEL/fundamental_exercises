//Constructor
function person (name){
    this.birth = Math.floor(Math.random() * (2050 - 1900 + 1)) + 1900;
    this.death = Math.floor(Math.random() * (2050 - this.birth + 1)) + this.birth;
    this.name = name;
}

//Create N cases
function testCases (n){
    let testArr = [];
    for(let i = 0; i < n; i++){
        testArr.push(new person('Name' + i));
    }
    return testArr;
}

function findTheOldest (persons){
    let difference = persons.map( (item) => item.death - item.birth);
    let biggestDiff =  difference.reduce( (result, currentItem) => {
        if (currentItem > result){
            return currentItem;
        }else{
            return result;
        }
    }, 0);

    return persons[difference.indexOf(biggestDiff)];
}

let testing = testCases(5);
console.log(testing);
console.log(findTheOldest(testing));
