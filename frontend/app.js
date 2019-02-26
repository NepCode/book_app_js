//require('./styles/styles.css');
import './styles/app.css';

//import BookService from './services/Bookservice';
import Book from './models/Book.js';
import UI from './UI';

//rendering books
document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
})


//post book and rendering message 
document.getElementById('book-form')
  .addEventListener('submit', function(e) {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

  

    //const bookService = new BookService();
    //bookService.postBook(formData);

     // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    //const book = new Book(title, author, isbn);

    // Validating User Input
    if (title === '' || author === '' || isbn === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
      ui.renderMessage('New Book Added Successfully', 'success', 2000);
    }

    e.preventDefault();

    })


//deleting book and rendering message    
document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
});


//getting book
function editBook(){
  const ui = new UI();
  var btn = document.getElementById("editBookBtn");
  console.log("Attribute reflected as a property: ", btn.onclick.toString());
  //ui.renderBook();
  console.log('clicked');
}


 