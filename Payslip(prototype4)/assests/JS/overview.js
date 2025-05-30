function openPopup(type) {
    const popup = document.getElementById('popup');
    const details = document.getElementById('popup-details');
    if (type === 'employee') {
        details.innerHTML = `
      <h2>Employee Details</h2>
      <ul>
        <li>Name: John Doe</li>
        <li>Position: Developer</li>
        <li>Email: john@example.com</li>
        <li>Contact: 123-456-7890</li>
      </ul>
    `;
    } else if (type === 'leave') {
        details.innerHTML = `
      <h2>Leave Summary</h2>
      <ul>
        <li>John - 2 Days</li>
        <li>Mary - 1 Day</li>
        <li>Kevin - 4 Days</li>
      </ul>
    `;
    }
    popup.style.display = 'flex';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("collapsed");
}
const links = document.querySelectorAll('.sidebar-link');
links.forEach(link => {
    link.addEventListener('click', function () {

        links.forEach(l => l.classList.remove('active'));

        this.classList.add('active');
    });
});
