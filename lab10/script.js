document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const themeToggle = document.getElementById("button1");
    const userTitle = document.getElementById("user-title");

  
    const savedName = localStorage.getItem("visitorName");
    if (savedName) {
        console.log(`Вітаємо знову, ${savedName}!`);
    }


    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {

            localStorage.setItem("visitorName", name);
            
            alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);
            console.log("Дані форми:", { name, email, message });
            
            contactForm.reset();
        } else {
            alert("Будь ласка, заповніть всі поля.");
        }
    });


    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const currentTheme = document.body.classList.contains("dark-theme") ? "Темна" : "Світла";
        console.log(`Змінено тему на: ${currentTheme}`);
    });
});