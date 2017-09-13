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
