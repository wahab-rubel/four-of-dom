// 1 where to add
const placesList = document.getElementById('places-list');
// 2 what to be added
const li = document.createElement('li');
li.innerText = 'pahartolibon';

// 3 add the childe
placesList.appendChild(li);

// 1 where to add
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Country List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Bangladesh';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'American';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Canada';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Germany';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);


// set innerHTML for directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>T-shirt</li>
<li>Lungi</li>
<li>Chandro genjji</li>
</ul>
`
mainContainer.appendChild(sectionDress);
