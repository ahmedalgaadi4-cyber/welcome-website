// جلب الاسم المخزن
const name = localStorage.getItem("username");

// لو مافي اسم يرجعه للصفحة الرئيسية
if (!name) {
    window.location.href = "index.html";
}

// وضع الاسم داخل نص الترحيب
const welcomeText = document.getElementById("welcomeText");
welcomeText.textContent = "Welcome, " + name + "!";

// زر الرجوع
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.href = "index.html";
});
