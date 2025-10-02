 document.addEventListener('DOMContentLoaded', () => {
        // Get the counter element
        const counterElement = document.getElementById('reviews');

        // Retrieve the current count from localStorage
        let count = localStorage.getItem('pageLoadCount');

        // If no count exists in localStorage, initialize it to 0
        if (count === null) {
            count = 0;
        } else {
            // Convert the stored string value to a number
            count = parseInt(count, 10);
        }

        // Increment the count
        count++;

        // Store the updated count back in localStorage
        localStorage.setItem('pageLoadCount', count);

        // Display the updated count on the page
        counterElement.textContent = `Reviews: ${count}`;
    });