const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    /* res.json({text:"hello world"}); */
    const books = await Book.find();
    res.json(books);
});

router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id,(err, book) => { 
        
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'we could not get book',
                errors: err
            });
        }

        if (!book) {
            return res.status(400).json({
                ok: false,
                mensaje: 'id book  ' + req.params.id + ' does not exist',
                errors: { message: 'there is no such id' }
            });
        }

        if (book) {
            return res.json(book);
        }

    });
    
});

router.post('/', async (req, res) => {
    const { title,author,isbn } = req.body;
    const imagePath = req.file.filename;
    const newBook = new Book({title,author,isbn, imagePath});
    await newBook.save();
    console.log(newBook);
    res.json({message : 'book saved'});
});

router.put('/:id', async (req, res) => {

    const { title,author,isbn } = req.body;
    //handling image
    //const imagePath = req.file.filename;
    const updateBook = new Book({title,author,isbn});

    try {
        const book = await Book.findById(req.params.id);
        if(!book) return res.json({message : 'no book found'});
        if(book){
            book.title = title;
            book.author = author;
            book.isbn = isbn;
            const bookUpdated = await book.save();
            console.log(bookUpdated);
        }
    } catch (error) {
        return res.json({message : 'Unexpected error occurred', error : error});
    }

    res.json({message : 'book updated'});
});

router.delete('/:id', async (req, res) => {
    //console.log(req.params.id);
    const book = await Book.findByIdAndDelete(req.params.id);
    //root
    await unlink(path.resolve('./backend/public/uploads/' + book.imagePath));
    res.json({message : 'book deleted'});
});

module.exports = router;


/* Headers Content-Type application/json
Body RAW
{
	"title" : "the lord of rings",
	"author" : "toriel",
	"isbn" : "D9A7D4AS434D8ASD343"
}

*/
