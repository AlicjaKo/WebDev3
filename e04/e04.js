let book = JSON.stringify(
{
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 2003,
    pages: 348
})

const object = JSON.parse(book);
console.log(object);


object.title = "Hobbit";
object.author = "Tolkien";
object.year = "1997";
object.pages = 657;
console.log(object);

let books = [
    JSON.stringify({title: "IT", author: "King", year: 2002, pages: 1092}),
    JSON.stringify({title: "Mistborn", author: "Sanderson", year: 2012, pages: 998}),
    JSON.stringify({title: "Lord of the Rings", author: "Tolkien", year: 1988, pages: 788})
];

let objBooks = [];
for(let i = 0; i<books.length; i++) {
    objBooks[i]=JSON.parse(books[i]);
}


objBooks.forEach(element => {
    console.log(element.title);
    console.log(element.author);
    console.log(element.year);
    console.log(element.pages);
});

const bookTitles = objBooks.map(book => book.title)
console.log(bookTitles);


let booksString = JSON.stringify(objBooks);
console.log(booksString);
