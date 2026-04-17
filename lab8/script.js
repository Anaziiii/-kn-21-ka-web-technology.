const buttonAdd = document.getElementById('button1');
const buttonRefresh = document.getElementById('button2');
const tableBody = document.getElementById('table');

function loadData() {
    tableBody.innerHTML = ""; 
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                let row = document.createElement("tr");
                row.innerHTML = `<td>${user.id}</td>
                                 <td>${user.name}</td>
                                 <td>${user.email}</td>`;
                tableBody.appendChild(row);
            });
        })
        .catch(err => console.error("Помилка:", err));
}

buttonAdd.addEventListener('click', function() {
    let nameVal = document.getElementById('Name').value;
    let emailVal = document.getElementById('Email').value;

    if(nameVal && emailVal) {
        let row = document.createElement("tr");
        let newId = tableBody.children.length + 1;
        row.innerHTML = `<td>${newId}</td>
                         <td>${nameVal}</td>    
                         <td>${emailVal}</td>`;
        tableBody.appendChild(row);
    } else {
        alert("Заповніть поля!");
    }
});
buttonRefresh.addEventListener('click', loadData);
loadData();