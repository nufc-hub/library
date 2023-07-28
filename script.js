// This is where added books will be stored //
let myLibrary = [];


// The book object constructor //
function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}


// Selects the 'library' div //
const library = document.querySelector('.library');

// Removes the 'library is empty' display from the webpage when initial item is added to library. //
function removeEmptyLibraryDisplay() {
    const emptyLibraryChildren = library.children;

        if(myLibrary.length === 1) {
            for(let i = emptyLibraryChildren.length - 1; i >= 0; i--) {
                library.removeChild(emptyLibraryChildren[i]);
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


// This function creates an elements for a library-item. i.e a book entry. //
function createLibraryItem(titleValue, authorValue, pagesValue, haveReadValue) {
    // Variables for creating elements of library card //
    const libraryItem = document.createElement('div');

    const libraryItemValues = document.createElement('div')
    const libraryItemTitle = document.createElement('p');
    const libraryItemAuthor = document.createElement('p');
    const libraryItemPages = document.createElement('p');

    const libraryItemButtonsContainer = document.createElement('div');
    const libraryItemHaveRead = document.createElement('div');
    const libraryItemRemove = document.createElement('div');

    libraryItem.classList.add('library-item-container');
    // Appends the libraryItem' to the library div. Library div exists in the HTML. //
    library.appendChild(libraryItem);

    // This appends the 'libraryItemValues' to the 'libraryItem'. //
    libraryItemValues.classList.add('top');
    libraryItem.appendChild(libraryItemValues);

    // These append to the 'libraryItemValues' container. //
    libraryItemTitle.classList.add('library-item-title');
    libraryItemValues.appendChild(libraryItemTitle);

    libraryItemAuthor.classList.add('library-item-author');
    libraryItemValues.appendChild(libraryItemAuthor);

    libraryItemPages.classList.add('library-item-pages');
    libraryItemValues.appendChild(libraryItemPages);

    // This appends to the 'libraryItem' container. //
    libraryItemButtonsContainer.classList.add('bottom');
    libraryItem.appendChild(libraryItemButtonsContainer);

    libraryItemHaveRead.classList.add('library-item-have-read');
    // This appends to the 'libraryItemButtonsContainer' container. //
    libraryItemButtonsContainer.appendChild(libraryItemHaveRead);
    libraryItemHaveRead.addEventListener('click', () => {
        // This is to indicate if the book has been read. //
        libraryItemHaveRead.classList.toggle('library-item-have-read')
    })

    libraryItemRemove.classList.add('library-item-remove');
// This appends to the 'libraryItemButtonsContainer' container. //
    libraryItemButtonsContainer.appendChild(libraryItemRemove);
    libraryItemRemove.addEventListener('click', () => {
        // This is to delete chosen book from the library. //
        libraryItem.remove();
    })
}


const form = document.querySelector('.add-book-form');
const submitButton = document.querySelector('.submit-button');

// use this function to add book //
function addBookToLibrary() {
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const titleValue = document.getElementById('title').value;
        const authorValue = document.getElementById('author').value;
        const pagesValue = parseInt(document.getElementById('pages').value);
        const haveReadValue = document.getElementById('have-read').value;

        const newBook = new Book (titleValue, authorValue, pagesValue, haveReadValue);

        // Adds the new book to the myLibrary array //
        myLibrary.push(newBook);

        //Add a loop here that will loop to the last item in the array and add it //
        // When the loop reaches the end of the array the createLibraryItem function is executed //


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