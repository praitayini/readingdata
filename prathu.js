document.write(5+6);
/*jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json',function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
   return items
  });                  
                
   
   getSParcs2014=function(n){
    if(!n){n=1000}
    $.getJSON('https://health.data.ny.gov/resource/pzzw-8zdv.json?$limit='+n)
       .then(function(data){
             debugger
      })*/
jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json')
.then(function(x){
listHealthdata.dt={data:{}}
                var div = document.getElementById(id)
                var h = '<h2 style="color:black">Health Data</h2>'
                x = x.slice(1).map(function(xi,i){
                   xi = {rate_per_100_000_people:xi[0],year:xi[1],patient_zipcode:xi[2],pqi_number:xi[3],software_version:xi[4],expected_rate_per_100_000_people:xi[5],pqi_name:xi[6]}
                   listHealthdata.dt.data[]={rate_per_100_000_people:xi.rate_per_100_000_people,year:xi.year,patient_zipcode:xi.patient_zipcode,pqi_number:xi.pqi_number,software_version:xi.software_version,expected_rate_per_100_000_people:xi.expected_rate_per_100_000_people,pqi_name:xi.pqi_name}
                   h +='<li id="'+xi.id+'">'+xi.id+': '+xi.name+'</li>'
                   return xi    
                })
   document.write(5+7);
