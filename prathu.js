document.write(5+6);
//jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json')
 function(x){
                listCancers.dt={study:{}}
                var div = document.getElementById(id)
                var h = '<h2 style="color:navy">Health data</h2>'
                x = x.slice(1).map(function(xi,i){
                   xi = xi.split(/\t/)
                   xi = {id:xi[0],name:xi[1],info:xi[2]}
                   listCancers.dt.study[xi.id]={name:xi.name,info:xi.info}
                   h +='<li id="'+xi.id+'">'+xi.id+': '+xi.name+'</li>'
                   return xi                   
                })
   
   getSParcs2014=function(n){
    if(!n){n=1000}
    $.getJSON('https://health.data.ny.gov/resource/pzzw-8zdv.json?$limit='+n)
       .then(function(x){
             debugger
      })
    
}
   document.write(5+7);
