console.log('This is Froth section');

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>This is my froth section</h1>
<ul>
<li>This is froth section</li>
<li>This is my creative action</li>
<li>This is practice inside</li>
</ul>
`
main.appendChild(section);
