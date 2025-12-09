function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Display time
    document.getElementById("time").innerHTML =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    // Optional date display
    let date = now.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById("date").innerHTML = date;
}

// Update clock every second
setInterval(updateClock, 1000);
// Call once immediately
updateClock();
