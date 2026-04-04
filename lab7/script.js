const button = document.getElementById('Button2');
const circle = document.getElementById('circle');
const N = 12; 


function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}


button.addEventListener('click', () => {
    circle.classList.toggle('move-active');
});

setInterval(() => {
    circle.style.backgroundColor = getRandomColor();
}, N * 1000);