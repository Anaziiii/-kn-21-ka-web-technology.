let registrationForm = document.getElementById('form');

registrationForm.addEventListener('submit', function(event) {

    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let passwordRepeat = document.getElementById('passwordRepeat').value;
    let age = document.getElementById('age').value;

    let isMale = document.getElementById('genderMale').checked;
    let isFemale = document.getElementById('genderFemale').checked;

    let hasError = false;

    if (name.trim() === "") {
        alert("Поле імені не може бути порожнім");
        hasError = true;
    }

    if (name.length < 2 ) {
        alert("Імʼя не може бути менше 2 символів")
    }

    if (password.length < 6) {
        alert("Пароль має бути не менше 6 символів");
        hasError = true;
    }

    if (password !== passwordRepeat) {
        alert("Паролі не збігаються");
        hasError = true;
    }

    if (parseInt(age) < 10) {
        alert("Вік не може бути меншим за 10");
        hasError = true;
    }

    if (isMale === false && isFemale === false) {
        alert("Будь ласка, оберіть стать");
        hasError = true;
    }
    if (hasError === true) {
        event.preventDefault();
    } else {
        alert("Реєстрація успішна!");
    }
});