const ctx = document.getElementById('priceChart').getConetext('2d');
const data = document.getElementById('price')
//create a new bar graph 

const priceChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: [],
        datasets: [{
            label: 'Stock Price',
            data: data,
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        }]
        

    },
    }
)