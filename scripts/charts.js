new Chart(document.getElementById("fuelChart"), {
    type: 'doughnut',
    data: {
      labels: ["Remaining", "Used"],
      datasets: [
        {
          data: [79,21],
          backgroundColor: ["#005288", "#DCEDF9"]
        }
      ]
    },
    options: {
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
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Spaceship",
        borderColor: "#005288",
        backgroundColor: ["#DCEDF9"]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Distance traveled over time'
    }
  }
});

new Chart(document.getElementById('supplyChart'), {
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
                'rgb(204, 220, 231)'
            	],
            borderColor: [
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)'
            	],
            borderWidth: 1
        }]
    },
    options: {
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