function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
    .then(result => result.json())
      .then(data => renderBooks(data))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    console.log(book) 
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);

    const p = document.createElement('p')
    p.textContent = book.publisher
    main.appendChild(p)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
