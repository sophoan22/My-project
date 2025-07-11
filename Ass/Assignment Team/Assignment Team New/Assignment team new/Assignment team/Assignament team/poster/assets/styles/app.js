document.getElementById('toggleSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('hidden');
});

const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [300, 500, 800, 1000, 400, 600, 550],
            borderColor: '#666',
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointBackgroundColor: '#666',
            pointBorderColor: '#666',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                max: 1200,
                ticks: {
                    stepSize: 200,
                    callback: value => value + '$',
                    color: '#666',
                    font: { size: 11 }
                },
                grid: { color: '#f0f0f0', drawBorder: false }
            },
            x: {
                ticks: { color: '#666', font: { size: 11 } },
                grid: { display: false }
            }
        }
    }
});