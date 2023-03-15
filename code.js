const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const button = document.querySelector('.bookTag');
const read = document.getElementById('read');
const bookTitles = document.querySelector('.booksTitles');

let x = 0;
let myLibrary = [];
let Library = [];
let element = [];
let gumb = [];
let remove = [];
const z = 1;



button.addEventListener('submit',function(e){
    Library[x] = new book (title.value, author.value, pages.value, read.value);
    addbook(title.value, author.value, pages.value, x, read);
    x = x + 1;
    title.value = author.value = pages.value = "";
    e.preventDefault();
    modal.style.display = "none";
})

function book (titlee, authorr, pagess){
  this.titlee = titlee;
  this.authorr = authorr;
  this.pagess = pagess;
}

function addbook(name, author, pages, x, read){
    bookTitles.appendChild(myLibrary[x] = document.createElement('div'));
    myLibrary[x].classList.add("visibleBook");
    myLibrary[x].appendChild(document.createElement('span')).innerHTML = '"'+name+'"';
    myLibrary[x].appendChild(document.createElement('span')).innerHTML = author;
    myLibrary[x].appendChild(document.createElement('span')).innerHTML = pages + " pages";

    if(read.checked)  myLibrary[x].append(Object.assign(gumb[x] = document.createElement('div'),{classList: "readBtn active", innerHTML:"read"}));
    else myLibrary[x].append(Object.assign(gumb[x] = document.createElement('button'),{classList: "readBtn unactive", innerHTML:"Unread"}));
    
    gumb[x].addEventListener('click', function(event){
        if(gumb[x].className == "readBtn active") Object.assign ((gumb[x]),{classList: "readBtn unactive", innerHTML: "Unread"});
        else Object.assign((gumb[x]), {classList: "readBtn active", innerHTML: "Read"});
     });

    myLibrary[x].append(Object.assign(remove[x] = document.createElement('button'), {classList: "remove", innerHTML: "Remove"}));

    remove[x].addEventListener('click', () => myLibrary[x].remove())
};



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
