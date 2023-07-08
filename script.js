const bookDisplay = document.querySelector('.bookDisplay');
const form = document.querySelector('.form');
const button = document.querySelector('.addBook');
const pop = document.querySelector('.pop');



class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = "not read"
    }
}


function read() {
    readStatus.addEventListener('click', (e) => {
        if (readStatus.checked == true){
            myLibrary[parseInt(readStatus.parentElement.parentElement.id)].read = "read";
         } else {
            myLibrary[parseInt(readStatus.parentElement.parentElement.id)].read = "not read";
         }
    })
}



let myLibrary = [];



button.addEventListener('click',() => {
    const formContainer = document.querySelector('.formContainer');
    if (pop.hasChildNodes()) {
        pop.removeChild(formContainer);
    } else {    
        //form Container
        let formContainer = document.createElement('div');
        formContainer.setAttribute('class', 'formContainer');
        pop.appendChild(formContainer);
        //form
        let myForm = document.createElement('form');
        myForm.setAttribute("class", "form");
        formContainer.appendChild(myForm);
        const form = document.querySelector(".form");


        //Author name input
        let authorLabel = document.createElement("label");
        authorLabel.textContent = "Author:";
        authorLabel.setAttribute("for", "author");

        let authorInput = document.createElement("input");
        authorInput.setAttribute("type", "text");
        authorInput.setAttribute("id", "author");
        authorInput.setAttribute("required", "true");
        authorLabel.appendChild(authorInput);
        
        //Book title input
        let titleLabel = document.createElement("label");
        titleLabel.textContent = "Title:";
        titleLabel.setAttribute("for", "title");
        
        let titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "title");
        titleInput.setAttribute("required", "true");
        titleLabel.appendChild(titleInput);
        
        //Number of pages input
        let pagesLabel = document.createElement("label");
        pagesLabel.textContent = "Number of pages:";
        pagesLabel.setAttribute("for", "pages");
        
        let pagesInput = document.createElement("input");
        pagesInput.setAttribute("type", "number");
        pagesInput.setAttribute("id", "pages");
        pagesInput.setAttribute("required", "true");
        pagesLabel.appendChild(pagesInput);
        
        //Submit button
        let submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.setAttribute("type", "submit");
        
        submitButton.addEventListener("click", submitClick, false);
        function submitClick(event) {
            if (authorInput.value == "" || titleInput.value == "" || pagesInput.value == "") {
                return;
            } else {
                event.preventDefault();
                myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value));
                addBookToLibrary();
                pop.removeChild(formContainer);
            }
        }
            
        form.appendChild(authorLabel);
        form.appendChild(titleLabel);
        form.appendChild(pagesLabel);
        form.appendChild(submitButton);
    }
})


function addBookToLibrary() {
        newBook = document.createElement('div');
        let place = myLibrary.length - 1;
        newBook.setAttribute('class', 'newBook');
        newBook.setAttribute('id', place.toString());

        //Title
        title = document.createElement('h2');
        title.setAttribute('class', 'bookTitle');
        title.textContent = myLibrary[myLibrary.length -1].title;
        //Author
        author = document.createElement('div');
        author.setAttribute('class', 'bookAuthor');
        author.textContent = "By " + myLibrary[myLibrary.length -1].author + ".";

        //Pages
        pages = document.createElement('div');
        pages.setAttribute('class', 'bookPages');
        pages.textContent = myLibrary[myLibrary.length -1].pages + " pages.";

        
        //Read status
        statusLabel = document.createElement('label');
        statusLabel.setAttribute('for', 'readStatus');
        statusLabel.textContent = "Have Read";
        
        readStatus = document.createElement('input');
        readStatus.setAttribute('id', 'readStatus');
        readStatus.setAttribute('type', 'checkbox');
        
        //Read container
        readCont = document.createElement('div');
        readCont.setAttribute('class', 'readCont');
        readCont.appendChild(statusLabel);
        readCont.appendChild(readStatus);

        //Remove
        removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'remove');
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener('click', (e) => {
            let targetToRemove = e.target;
            let toRemove = document.getElementById(targetToRemove.parentElement.id);
            toRemove.remove();
        })

        bookDisplay.appendChild(newBook);

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(readCont);
        newBook.appendChild(removeBtn);

        read();
}
