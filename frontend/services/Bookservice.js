class BookService {

    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async getBook(book) {
        const response = await fetch(this.URI+'/'+book._id);
        const books = await response.json();
        return books;
    }

    async postBook(book) {
        const response = await fetch(this.URI,{
            method: 'POST',
            body: book
        });
        const data = await response.json();
        //return data;
        console.log(data);
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });    
        const book = await response.json();
        console.log( book);
    }
}

//module.exports = BookService;
export default BookService;