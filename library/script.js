// Library Manager (LocalStorage-backed)
// Data model: { title, author, isAvailable: true|false }

// DOM refs
const addForm = document.getElementById('addBookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const availableList = document.getElementById('availableList');
const borrowedList = document.getElementById('borrowedList');
const availableCount = document.getElementById('availableCount');
const borrowedCount = document.getElementById('borrowedCount');
const globalSearch = document.getElementById('globalSearch');
const seedDemo = document.getElementById('seedDemo');
const clearStorage = document.getElementById('clearStorage');

const STORAGE_KEY = 'library_books_v1';

// --- Utilities ---
function readBooks(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch(e){ return []; }
}

function saveBooks(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function normalize(str){ return (str||'').trim().toLowerCase(); }

// --- CRUD operations ---
function addBook(title, author){
  const books = readBooks();
  const exists = books.some(b => normalize(b.title) === normalize(title));
  if (exists) {
    alert('A book with that title already exists (duplicate titles not allowed).');
    return false;
  }
  books.push({ title: title.trim(), author: author.trim(), isAvailable: true });
  saveBooks(books);
  render();
  return true;
}

function borrowBook(index){
  const books = readBooks();
  if (!books[index] || !books[index].isAvailable) return;
  books[index].isAvailable = false;
  saveBooks(books);
  render();
}

function returnBook(index){
  const books = readBooks();
  if (!books[index] || books[index].isAvailable) return;
  books[index].isAvailable = true;
  saveBooks(books);
  render();
}

function deleteBook(index){
  if (!confirm('Delete this book permanently?')) return;
  const books = readBooks();
  books.splice(index,1);
  saveBooks(books);
  render();
}

// --- Render lists ---
function createBookElement(book, idx){
  const item = document.createElement('div');
  item.className = 'book';

  // left info
  const info = document.createElement('div');
  info.className = 'book-info';
  const thumb = document.createElement('div');
  thumb.className = 'book-thumb';
  // show initials
  const initials = (book.title.split(' ').map(s => s[0] || '').slice(0,2).join('') || 'B').toUpperCase();
  thumb.textContent = initials;

  const meta = document.createElement('div');
  meta.className = 'book-meta';
  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  const p = document.createElement('p');
  p.textContent = book.author;

  meta.appendChild(h3);
  meta.appendChild(p);

  info.appendChild(thumb);
  info.appendChild(meta);

  // actions
  const actions = document.createElement('div');
  actions.className = 'book-actions';

  const delBtn = document.createElement('button');
  delBtn.className = 'small delete';
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => deleteBook(idx);

  if (book.isAvailable){
    const borrowBtn = document.createElement('button');
    borrowBtn.className = 'small borrow';
    borrowBtn.textContent = 'Borrow';
    borrowBtn.onclick = () => borrowBook(idx);
    actions.appendChild(borrowBtn);
    actions.appendChild(delBtn);
  } else {
    const returnBtn = document.createElement('button');
    returnBtn.className = 'small return';
    returnBtn.textContent = 'Return';
    returnBtn.onclick = () => returnBook(idx);
    actions.appendChild(returnBtn);
    actions.appendChild(delBtn);
  }

  item.appendChild(info);
  item.appendChild(actions);
  return item;
}

function render(){
  const q = normalize(globalSearch.value || '');
  const books = readBooks();

  // filter by search
  const filtered = books.map((b,i)=>({b,i}))
    .filter(({b}) => {
      if (!q) return true;
      return normalize(b.title).includes(q) || normalize(b.author).includes(q);
    });

  const available = filtered.filter(o => o.b.isAvailable);
  const borrowed = filtered.filter(o => !o.b.isAvailable);

  // clear DOM
  availableList.innerHTML = '';
  borrowedList.innerHTML = '';

  // render available
  if (available.length === 0){
    availableList.innerHTML = '<div class="hint">No available books.</div>';
  } else {
    available.forEach(({b,i}) => {
      availableList.appendChild(createBookElement(b, i));
    });
  }

  // render borrowed
  if (borrowed.length === 0){
    borrowedList.innerHTML = '<div class="hint">No borrowed books.</div>';
  } else {
    borrowed.forEach(({b,i}) => {
      borrowedList.appendChild(createBookElement(b, i));
    });
  }

  availableCount.textContent = available.length;
  borrowedCount.textContent = borrowed.length;
}

// --- Event wiring ---
addForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  if (!title.trim() || !author.trim()){
    alert('Please enter both title and author.');
    return;
  }
  const ok = addBook(title, author);
  if (ok){
    addForm.reset();
    titleInput.focus();
  }
});

globalSearch.addEventListener('input', render);

seedDemo.addEventListener('click', () => {
  const demo = [
    { title:'Java Basics', author:'James', isAvailable:true },
    { title:'Data Structures', author:'A. Author', isAvailable:true },
    { title:'Clean Code', author:'Robert C.', isAvailable:false },
    { title:'Algorithms', author:'Cormen', isAvailable:true }
  ];
  // merge but avoid duplicates
  const books = readBooks();
  demo.forEach(d => {
    const exists = books.some(b => normalize(b.title) === normalize(d.title));
    if (!exists) books.push(d);
  });
  saveBooks(books);
  render();
});

clearStorage.addEventListener('click', () => {
  if (!confirm('Clear all books from browser storage?')) return;
  localStorage.removeItem(STORAGE_KEY);
  render();
});

// initial render on load
document.addEventListener('DOMContentLoaded', render);
