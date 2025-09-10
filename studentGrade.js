// studentGrade.js

function studentGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid input. Marks should be between 0 and 100.";
    } else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 49) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

// Example test
console.log(studentGrade(85)); // Expected: Grade A
console.log(studentGrade(45)); // Expected: Grade D

ls