// -----------------------------
// Show Different Sections
// -----------------------------

function showPage(pageId) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}

// -----------------------------
// Student Registration
// -----------------------------

document.getElementById("studentForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value;
    let semester = document.getElementById("semester").value;

    let result = document.getElementById("result");

    // Name Validation
    if (name === "") {
        result.style.display = "block";
        result.style.background = "#ffe6e6";
        result.style.color = "#d8000c";
        result.innerHTML = "Please enter your full name.";
        return;
    }

    // Email Validation
    if (email === "") {
        result.style.display = "block";
        result.style.background = "#ffe6e6";
        result.style.color = "#d8000c";
        result.innerHTML = "Please enter your email address.";
        return;
    }

    // Email Format
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        result.style.display = "block";
        result.style.background = "#ffe6e6";
        result.style.color = "#d8000c";
        result.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Roll Number
    if (roll === "") {
        result.style.display = "block";
        result.style.background = "#ffe6e6";
        result.style.color = "#d8000c";
        result.innerHTML = "Please enter your roll number.";
        return;
    }

    // Course
    if (course === "") {
        result.style.display = "block";
        result.style.background = "#ffe6e6";
        result.style.color = "#d8000c";
        result.innerHTML = "Please select a course.";
        return;
    }

    // Semester
    if (semester === "") {
        result.style.display = "block";
        result.style.background = "#ffe6e6";
        result.style.color = "#d8000c";
        result.innerHTML = "Please select a semester.";
        return;
    }

    // Success Message
    result.style.display = "block";
    result.style.background = "#d4edda";
    result.style.color = "#155724";

    result.innerHTML = `
        <h3>Registration Successful 🎉</h3>

        <p><strong>Student Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Roll Number:</strong> ${roll}</p>

        <p><strong>Course:</strong> ${course}</p>

        <p><strong>Semester:</strong> ${semester}</p>

        <p>Your registration has been completed successfully.</p>
    `;

    // Clear Form
    document.getElementById("studentForm").reset();

});

// -----------------------------
// Welcome Alert
// -----------------------------

window.onload = function () {

    alert("Welcome to the Student Management System!");

};