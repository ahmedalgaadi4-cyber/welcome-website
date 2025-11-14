const input = document.getElementById("username");
const button = document.getElementById("submitBtn");

button.addEventListener("click", function () {
    const name = input.value.trim();

    if (name === "") return;

    // تخزين الاسم
    localStorage.setItem("username", name);

    // تأثير بصري لطيف
    button.style.transform = "scale(0.95)";
    button.style.opacity = "0.7";

    // الانتقال بعد نصف ثانية
    setTimeout(function () {
        window.location.href = "welcome.html";
    }, 500);
});
