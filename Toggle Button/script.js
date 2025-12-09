let toggleBtn = document.getElementById("toggleBtn");
let icon = document.getElementById("icon");

// Check saved mode from localStorage
let savedMode = localStorage.getItem("theme");

// Apply saved theme
if (savedMode === "dark") {
    document.body.classList.add("dark");
    icon.textContent = "☀️";
} else {
    document.body.classList.add("light");
    icon.textContent = "🌙";
}

// Toggle event
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (document.body.classList.contains("dark")) {
        icon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
