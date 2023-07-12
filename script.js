
const form = document.querySelector('.form');
const searchbox = document.querySelector('.input');
const booklist = document.querySelector('.book-list')
const title = document.querySelector('.name');
const img = document.querySelector('.img')
const bookDetails = document.querySelector('.book');
const save = document.querySelector('.save');
const url = 'http://localhost:3000/books';


const fetchData=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>getData(data))
}


const getData=(data)=>{
    data.map(book=>createLi(book))
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        search(data)
    })
    console.log(data)
    save.style.display='none'
}

const createLi=(book)=>{
    const li = document.createElement('li');
    li.classList.add('li');
    li.innerHTML=book.name;
    li.addEventListener('click', ()=>showbook(book))
    booklist.appendChild(li)
}

const showbook=(book)=>{
    img.src=book.image
    title.innerHTML=book.name;
    bookDetails.innerHTML=book.description;
    save.style.display='block'
    save.addEventListener('click', saveNow)

}

const saveNow=()=>{
    alert('Purchase Successful')
}

const search=(data)=>{
    data.map(book=>{
        if(searchbox.value===book.name){
            showbook(book)
        }
    })
}
                                                                                                                                        



document.addEventListener('DOMContentLoaded', fetchData(url))


































































































