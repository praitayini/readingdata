jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json')
  .then(function(dt){
    var avg=function(a){
      return a.reduce(function(a,b){
        return a+b
        })/a.length
    }
    console.log('data loaded: ',dt)
    var x=dt.map(function(xi){
      return parseFloat(xi.expected_rate_per_100_000_people)
    })
    avg(x)
    // data in x, ready for stats
    var wk = document.getElementById('work')
    wk.innerHTML='Number of observartions = '+x.length+'<br>Average value : '+avg(x)
    wk.style.color='blue'
    
    //debugger
})

Plotly.d3.json('https://health.data.ny.gov/resource/5q8c-d6xq.json', 
  function(items){
 var index;
 var pqi_name= [];
 var y1  = [];
 var y2  = [];
    
 for	(index = 0; index < items.length; index++) {
 	pqi_name.push(items[index].pqi_name);
 	y1.push(items[index].observed_rate_per_100_000_people);
 	y2.push(items[index].expected_rate_per_100_000_people);
 }
    

    var trace1 = {
      x: pqi_name,
      y: y1,
      name: 'Observed Rate (per 100,000 people)',
      marker: {color: 'rgb(55, 83, 109)'},
      type: 'bar'
    };

    var trace2 = {
      x: pqi_name,
      y: y2,
      name: 'Expected Rate (per 100,000 people)',
      marker: {color: 'rgb(26, 118, 255)'},
      type: 'bar'
    };

    var data = [trace1, trace2];

    var layout = {
      title: 'Health data in 2015',
      xaxis: {tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }},
      yaxis: {
        title: '',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      legend: {
        x: 0,
        y: 1.0,
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)'
      },
      barmode: 'group',
      bargap: 0.15,
      bargroupgap: 0.1
    };

    Plotly.newPlot('myDiv', data, layout);
    

    }
); 

