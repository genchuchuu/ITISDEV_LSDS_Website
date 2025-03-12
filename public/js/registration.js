document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("input[placeholder='Name']").value.trim();
        const email = document.querySelector("input[placeholder='E-mail']").value.trim();
        const password = document.querySelector("input[placeholder='Password']").value;
        const idNumber = document.querySelector("input[placeholder='ID Number']").value.trim();
        const position = document.querySelector("select").value;

        let isValid = true;
        let errorMessage = "";

        const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
        if (!nameRegex.test(name)) {
            isValid = false;
            errorMessage += "❌ Name must include at least a first and last name (middle name optional).\n";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@dlsu\.edu\.ph$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += "❌ Email must be a valid DLSU email (e.g., user@dlsu.edu.ph).\n";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        if (!passwordRegex.test(password)) {
            isValid = false;
            errorMessage += "❌ Password must be 8-16 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.\n";
        }

        const idRegex = /^\d{8}$/;
        if (!idRegex.test(idNumber)) {
            isValid = false;
            errorMessage += "❌ ID Number must be an 8-digit DLSU number.\n";
        }

        if (position === "") {
            isValid = false;
            errorMessage += "❌ Please select a position.\n";
        }

        if (!isValid) {
            alert(errorMessage);
        } else {
            alert("✅ Registration successful!");
            form.submit(); // Submit form if everything is valid
        }
    });
});
