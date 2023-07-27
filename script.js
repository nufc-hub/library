// This is where added books will be stored //
let myLibrary = [];

// The book object constructor //
function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}

// Selects the 'library-empty' div //
const emptyLibraryDisplay = document.querySelector('.library-empty');

// removes the 'library is empty' display from the webpage //
function removeEmptyLibraryDisplay() {
    const emptyLibraryChildren = emptyLibraryDisplay.children;

        if(myLibrary.length === 1) {
            for(let i = emptyLibraryChildren.length - 1; i >= 0; i--) {
                emptyLibraryDisplay.removeChild(emptyLibraryChildren[i]);
            };
        } else {
            return;
        }
}

const overlay = document.querySelector('.overlay');
const formBoxContainer = document.querySelector('.form-box-container');

// When the 'overlay' is clicked form closes without submitting //
function closeForm() {
    // This hides the formBoxContainer and overlay elements'. //
    formBoxContainer.style.display = 'none';
    overlay.style.display = 'none';
}

// This executes the 'closeForm'. //
overlay.addEventListener('click', closeForm);

const addBookLabel = document.getElementById('add-book-label');
const addBookButton = document.querySelector('.add-book-button');

// This brings up the add book form when the add book button is clicked. //
function displayForm() {
    // This changes the 'overlay' and 'formBoxContainer' display from 'none' to 'block'. //
    overlay.style.display = 'block';
    formBoxContainer.style.display = 'block';
}

// This executes the 'displayForm'. //
addBookLabel.addEventListener('click', displayForm);
addBookButton.addEventListener('click', displayForm);

const libraryItemsContainer = document.createElement('div');
// This function creates a new element for library items container //
function createBookGrid() {
    if (myLibrary.length === 0) {

        libraryItemsContainer.classList.add('library-items-container');
        libraryContent.appendChild(libraryItemsContainer);
    }
}


const libraryItem = document.createElement('div');
// This function creates an element for a library-item. i.e a book entry. //
function createLibraryItem() {

    libraryItem.classList.add('library-item');
    libraryItemsContainer.appendChild(libraryItem);
}

const form = document.querySelector('.add-book-form');
const submitButton = document.querySelector('.submit-button');

// use this function to add book //
function addBookToLibrary() {
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = parseInt(document.getElementById('pages').value);
        const haveRead = document.getElementById('have-read').value;

        const newBook = new Book (title, author, pages, haveRead);

        // Adds the new book to the myLibrary array //
        myLibrary.push(newBook);

        // Clears the form fields after adding the book //
        form.reset();

        // Removes the empty library display when the first book is added //
        removeEmptyLibraryDisplay()

        // Add function to close form display //
    });
}

addBookToLibrary();


// loops through all items in the array //
for (item of myLibrary) {
  console.log(item);
}