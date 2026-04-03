const p1 = document.getElementById('p1');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const container = document.getElementById('container');
let counter = 0;


p1.addEventListener('click', function() {
    p1.style.backgroundColor = '#94adab';
    p1.textContent = 'Текст реально змінився';
    p1.style.borderRadius = '35px'
});


button1.addEventListener('click', function() {
    button1.style.backgroundColor = '#8da9d9';
    button1.style.fontFamily = 'serif'
    button1.style.color = 'dark';
    button1.style.padding = '50px 10px';
    button1.style.border = '2px solid black';
    button1.textContent = 'Зміна кольору та тексту';
});

button2.addEventListener('mouseover', function() {
    button2.style.backgroundColor = '#8a5e96c1';
    button2.style.color = 'dark';
    button2.style.padding = '50px 60px';
    button2.style.border = '2px solid black';
    button2.textContent = 'Зміна кольору та тексту при наведенні';
});

button3.addEventListener('click', function() {
    button3.style.margin = '20px'
    button3.style.backgroundColor = '#1619c269';
    button3.style.border = '2px solid black';
    button3.textContent = 'Нажміть 12 разів :)'

    let newParagraph = document.createElement('p');
    container.appendChild(newParagraph);
    newParagraph.textContent = 'Це новий доданий елемент';
    newParagraph.style.fontSize = '30px';
    newParagraph.style.border = '1px solid black';
    newParagraph.style.padding = '10px';
    newParagraph.style.margin = '0 0 30px 0';
    newParagraph.style.background = '#1619c269';
    newParagraph.style.borderRadius = "35px";
    counter += 1
    if (counter === 12){
        alert ("А.К. Ви нажали 12 разів")
    }
});