document.write(5+6);
var file1 = jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json').then(function(x){y=x;console.log('done')});
document.write(5+7);
document.write(file1.year);
