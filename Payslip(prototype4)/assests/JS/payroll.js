  document.getElementById("payrollForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const payrollData = {
                name: document.getElementById("name").value,
                role: document.getElementById("role").value,
                empId: document.getElementById("empId").value,
                date: document.getElementById("date").value,
                basicSalary: document.getElementById("basicSalary").value,
                totalSalary: document.getElementById("totalSalary").value,
                additions: document.getElementById("additions").value,
                deductions: document.getElementById("deductions").value,
            };
            localStorage.setItem("payrollData", JSON.stringify(payrollData));
            window.location.href = "payslip.html";
        });
    
        function toggleSidebar() {
            document.querySelector(".sidebar").classList.toggle("collapsed");
        }