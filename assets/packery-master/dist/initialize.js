



// init Packery
var $container = $('#test5').packery({
  // options...
    itemSelector: '.packery',
    gutter: 10
});
// layout Packery after each image loads
$container.imagesLoaded().progress( function() {
  $container.packery();
});







