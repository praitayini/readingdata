document.write(5+6);
//jQuery.getJSON("https://health.data.ny.gov/resource/5q8c-d6xq.json",function( data ) {
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
      })
    
}
   document.write(5+7);
