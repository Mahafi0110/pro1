/* -------------------- NAVBAR TOGGLE -------------------- */
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

/* -------------------- LOGIN FORM VALIDATION -------------------- */
function validateLogin() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let valid = true;

    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (email.value.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if (password.value.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        valid = false;
    }

    return valid;
}

/* -------------------- SIGNUP FORM VALIDATION -------------------- */
function validateSignup() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    if (name.value.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if (!validateEmail(email.value)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    if (password.value.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        valid = false;
    }

    if (confirmPassword.value.trim() === "") {
        document.getElementById("confirmPasswordError").innerText = "Confirm your password";
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

/* -------------------- ADD COURSE FORM VALIDATION -------------------- */
function validateCourseForm() {
    let title = document.getElementById("courseTitle");
    let category = document.getElementById("category");
    let price = document.getElementById("price");
    let description = document.getElementById("description");
    let modules = document.getElementById("modules");

    let valid = true;

    document.getElementById("courseTitleError").innerText = "";
    document.getElementById("categoryError").innerText = "";
    document.getElementById("priceError").innerText = "";
    document.getElementById("descriptionError").innerText = "";
    document.getElementById("modulesError").innerText = "";

    if (title.value.trim() === "") {
        document.getElementById("courseTitleError").innerText = "Course title is required";
        valid = false;
    }

    if (category.value.trim() === "") {
        document.getElementById("categoryError").innerText = "Category is required";
        valid = false;
    }

    if (price.value.trim() === "" || Number(price.value) <= 0) {
        document.getElementById("priceError").innerText = "Price must be positive";
        valid = false;
    }

    if (description.value.trim() === "") {
        document.getElementById("descriptionError").innerText = "Description is required";
        valid = false;
    }

    if (modules.value.trim() === "") {
        document.getElementById("modulesError").innerText = "Please add modules";
        valid = false;
    }

    return valid;
}

/* -------------------- LESSON PLAYER -------------------- */
let currentLesson = 1;
const totalLessons = 5;

function loadLesson(num) {
    currentLesson = num;
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDesc = document.getElementById("lesson-desc");
    const lessonItems = document.querySelectorAll(".lesson-list li");

    lessonItems.forEach(item => item.classList.remove("active"));
    lessonItems[num - 1].classList.add("active");

    const lessonData = [
        {
            title: "Lesson 1: HTML Basics",
            desc: "Learn HTML tags, attributes, and structure."
        },
        {
            title: "Lesson 2: CSS Fundamentals",
            desc: "Learn CSS selectors, properties, and layout."
        },
        {
            title: "Lesson 3: Flexbox & Grid",
            desc: "Learn modern layout techniques in CSS."
        },
        {
            title: "Lesson 4: JavaScript Basics",
            desc: "Learn variables, functions, loops, and events."
        },
        {
            title: "Lesson 5: DOM Manipulation",
            desc: "Interact with the webpage dynamically using JS."
        }
    ];

    lessonTitle.innerText = lessonData[num - 1].title;
    lessonDesc.innerText = lessonData[num - 1].desc;
}

function nextLesson() {
    if (currentLesson < totalLessons) {
        loadLesson(currentLesson + 1);
    }
}

function prevLesson() {
    if (currentLesson > 1) {
        loadLesson(currentLesson - 1);
    }
}

/* -------------------- INITIALIZE -------------------- */
document.addEventListener("DOMContentLoaded", function () {
    // Initialize lesson 1 as active if on lesson-player page
    if (document.getElementById("lesson-title")) {
        loadLesson(1);
    }
});
