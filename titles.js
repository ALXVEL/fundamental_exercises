
//Constructor
function book (title, author){
    this.title = title;
    this.author = author;
}

function makeTestCase (n){
    let arrayOfBooks = [];

    for (let i = 0; i < n; i++){
        arrayOfBooks.push(new book('Book'+i, 'Name'+i));
    }

    return arrayOfBooks;
}


function getTitles (book){
    return book.map( (item) => item.title);
}

console.log(getTitles(makeTestCase(5)));