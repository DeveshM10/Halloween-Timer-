function startCountdown() {
    const endDate = new Date('2024-10-31T00:00:00'); // Target end date

    function updateTimer() {
        const now = new Date();
        const timeDiff = endDate - now;

        if (timeDiff <= 0) {
            document.getElementById('timer').textContent = "00:00:00";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent = 
            `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    }

    // Update the timer immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

window.onload = startCountdown;

// Add click event for button redirect
document.getElementById('homepage-button').onclick = function() {
    window.location.href = 'https://www.yourhomepageurl.com'; // Replace with your homepage URL
}
