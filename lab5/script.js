const p1 = document.getElementById('p1');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const container = document.getElementById('container');


button1.addEventListener('click', function() {
    button1.style.backgroundColor = 'red';
    button1.style.color = 'white';
    button1.style.padding = '10px 20px';
    button1.style.border = '2px solid black';
    button1.textContent = 'Зміна кольору та тексту';
});

button2.addEventListener('mouseover', function() {
    button2.style.backgroundColor = 'blue';
    button2.style.color = 'white';
    button2.style.padding = '10px 20px';
    button2.style.border = '2px solid black';
    button2.textContent = 'Зміна кольору та тексту при наведенні';
});

button3.addEventListener('click', function() {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Це новий доданий елемент';
    newParagraph.style.fontSize = '70px';
    newParagraph.style.border = '1px solid black';
    newParagraph.style.padding = '10px';
    newParagraph.style.margin = '0 0px 100px 0';


    container.appendChild(newParagraph);
    button3.style.backgroundColor = 'green';
    button3.style.border = '2px solid black';
});