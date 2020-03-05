window.onload = function() {
    new Chart(document.getElementById("fuelChart"), {
        type: 'doughnut',
        data: {
            labels: ["Remaining", "Used"],
            datasets: [{
                data: [79,21],
                backgroundColor: ["#005288", "#DCEDF9"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Fuel left in percentage'
            }
        }
    });

    new Chart(document.getElementById("distanceChart"), {
        type: 'line',
        data: {
            labels: [10,20,30,40,50,60,70,80,90,100],
            datasets: [{ 
                data: [0, 25000000, 50000000,100000000,150000000,200000000,250000000,300000000,350000000,400000000],
                label: "Spaceship",
                borderColor: "#005288",
                backgroundColor: ["#DCEDF9"]
            }]          
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
            text: 'Distance traveled over time'
            }
        }
    });

    new Chart(document.getElementById("supplyChart"), {
        type: 'bar',
   	    data: {
            labels: ['Bread', 'Rice', 'Vegetables', 'Meat', 'Fruit'],
            datasets: [{
                data: [78, 76,82 ,69,75],
                label: 'Percentage of supply left',
                backgroundColor: [
                    'rgb(204, 220, 231)',
                    'rgb(204, 220, 231)',
                    'rgb(204, 220, 231)',
                    'rgb(204, 220, 231)',
                    'rgb(204, 220, 231)'],
                borderColor: [
                    'rgb(0, 82, 136)',
                    'rgb(0, 82, 136)',
                    'rgb(0, 82, 136)',
                    'rgb(0, 82, 136)',
                    'rgb(0, 82, 136)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 100
                    }
                }]
            }
        }
    });
}