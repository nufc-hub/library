let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const libraryContent = document.querySelector('.middle');

// removes the 'library is empty' display from the webpage //
function removeEmptyLibraryDisplay() {
    const children = libraryContent.children;

        if(myLibrary.length !== 0) {
            for(let i = children.length - 1; i >= 0; i--) {
                libraryNoContent.removeChild(children[i]);
            };
        } else {
            return;
        }
}

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

// use this function to add book //
function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}


// loops through all items in the array //
for (const item of myLibrary) {
  console.log(item);
}