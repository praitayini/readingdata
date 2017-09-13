document.write(5+6);
jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json', function(data){
  var items = [];
  jQuery.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
document.write(5+7);
document.write(file1.year);
