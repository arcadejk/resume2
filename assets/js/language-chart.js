// Get the context of the canvas element where the chart will be rendered
const ctx = document.getElementById('languageChart').getContext('2d');

// Define the data for the chart
const data = {
    labels: ['French', 'English', 'Spanish', 'Portuguese', 'Italian', 'Chinese'],
    datasets: [
        {
            label: 'Speaking',
            data: [10, 8, 8, 8, 6, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Writing',
            data: [10, 8, 7, 7, 5, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Reading',
            data: [10, 9, 8, 8, 6, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
};

// Define the configuration for the chart
const config = {
    type: 'radar', // Using a radar chart for this example
    data: data,
    options: {
        responsive: true,
        animation: {
            duration: 2000, // Animation duration in milliseconds
            easing: 'easeInOutBounce' // Animation easing
        },
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Language Proficiency: Speaking, Writing, and Reading'
            }
        }
    }
};

// Create and render the chart
const languageChart = new Chart(ctx, config);
