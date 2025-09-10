// speedDetector.js

function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

// Example test
console.log(speedDetector(80));  // Expected: Points: 2
console.log(speedDetector(135)); // Expected: License suspended