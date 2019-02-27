const myArray=["all_about_love","desert_solitaire","disgrace","geek_love","gilead","infinite_jest","lolita","maus","never_let_me_go","poems"];
//function that decleare for each list tag an element of the myArray

let booksDetails =[{
  id: myArray[0],
  title: "The Love",
  language: "english",
  author:"Paul",
  imgsrc: 'https://i.harperapps.com/covers/9780060959470/y648.jpg'
},
{
  id: myArray[1],
  title: "Desert",
  language: "italian",
  author:"Marco",
  imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51I8u-BR-bL._SX302_BO1,204,203,200_.jpg'
},
{
  id: myArray[2],
  title:"Disgrace",
  language: "chinese",
  author:"Mao",
  imgsrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/JMCoetzee_Disgrace.jpg/200px-JMCoetzee_Disgrace.jpg'
},
{
  id: myArray[3],
  title:"Geek",
  language: "spanish",
  author:"Pablo",
  imgsrc: 'https://images.gr-assets.com/books/1366699063l/13872.jpg'
},
{
  id: myArray[4],
  title:"Gilead",
  language: "french",
  author:"Margout",
  imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/91k3cIBsWSL.jpg'
},
{
  id: myArray[5],
  title:"Jest",
  language: "german",
  author:"Muller",
  imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/81KBldResmL.jpg'
},
{
  id: myArray[6],
  title:"Lolita",
  language:"spanish",
  author:"Rosa",
  imgsrc: 'http://litreactor.com/sites/default/files/images/column/2015/01/lolita.png'
},
{
  id: myArray[7],
  title: "Maus",
  language: "polish",
  author: "Lewandoswi",
  imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51JW5sREyEL._SX362_BO1,204,203,200_.jpg'
},
{
  id: myArray[8],
  title:"NLM Go",
  language:"arabic",
  author:"Mohammed",
  imgsrc: 'https://images.gr-assets.com/books/1353048590l/6334.jpg'
},
{
  id: myArray[9],
  title:"Poem",
  language: "danish",
  author: "Sorensen",
  imgsrc: 'http://bookcoverarchive.com/wp-content/uploads/amazon/good_poems_for_hard_times.jpg'
}
]
function books() {
  const ul = document.createElement('ul');
  for(i=0;i<myArray.length;i++){
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const img = document.createElement('img');
    p.innerHTML = booksDetails[i].language;
    p1.innerHTML = booksDetails[i].author;
    h2.innerHTML = booksDetails[i].title;
    img.setAttribute('src',booksDetails[i].imgsrc);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(p1);
    li.appendChild(img);
    ul.appendChild(li);
  }
  document.getElementById('myBooks').appendChild(ul);
}
books();
