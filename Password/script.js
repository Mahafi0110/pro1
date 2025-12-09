const password = document.getElementById("password");
const strengthValue = document.getElementById("strengthValue");
const strengthBar = document.getElementById("strengthBar");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const length = document.getElementById("length");

password.addEventListener("input", () => {
    const pass = password.value;
    let strength = 0;

    // Conditions checking
    const conditions = {
        upper: /[A-Z]/.test(pass),
        lower: /[a-z]/.test(pass),
        number: /[0-9]/.test(pass),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
        length: pass.length >= 8
    };

    // Update UI for each condition
    updateCondition(upper, conditions.upper);
    updateCondition(lower, conditions.lower);
    updateCondition(number, conditions.number);
    updateCondition(symbol, conditions.symbol);
    updateCondition(length, conditions.length);

    // Calculate strength
    for (let key in conditions) {
        if (conditions[key]) strength++;
    }

    // Update strength UI
    updateStrength(strength);
});

function updateCondition(element, condition) {
    if (condition) {
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
    }
}

function updateStrength(level) {
    if (level <= 2) {
        strengthValue.textContent = "Weak";
        strengthBar.style.width = "30%";
        strengthBar.style.background = "red";
    } else if (level === 3 || level === 4) {
        strengthValue.textContent = "Medium";
        strengthBar.style.width = "65%";
        strengthBar.style.background = "orange";
    } else if (level === 5) {
        strengthValue.textContent = "Strong";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    } else {
        strengthValue.textContent = "—";
        strengthBar.style.width = "0%";
    }
}
