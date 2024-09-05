document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('roomTypeChart').getContext('2d');

    const roomTypeChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Dorm', 'Apartment'],
            datasets: [{
                label: 'Room Type Distribution',
                data: [55, 45], // Fake data: 55% Dorm, 45% Apartment
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)', // Blue for Dorm
                    'rgba(255, 99, 132, 0.2)'  // Red for Apartment
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)', // Blue border
                    'rgba(255, 99, 132, 1)'  // Red border
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (context.parsed !== null) {
                                label += ': ' + context.parsed + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
