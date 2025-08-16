
// Typing Effect
const text = "Find Your Dream Job Today";
let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
typeText();

// Counters
function animateCounter(id, target) {
    let count = 0;
    const speed = 50;
    const interval = setInterval(() => {
        if (count < target) {
            count++;
            document.getElementById(id).textContent = count;
        } else {
            clearInterval(interval);
        }
    }, speed);
}
animateCounter("jobsCount", 500);
animateCounter("companiesCount", 120);

// Popup Logic
const popup = document.getElementById("popupForm");
document.getElementById("applyBtn").addEventListener("click", () => popup.style.display = "flex");
document.getElementById("closePopup").addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", e => { if (e.target === popup) popup.style.display = "none"; });

// Search Logic (Example)
document.getElementById("search").addEventListener("input", (e) => {
    console.log("Searching for:", e.target.value);
});
