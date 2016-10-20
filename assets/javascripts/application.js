var $ = require('jquery');
require('bootstrap-sass');
var d3 = require('d3');

require('./components/menu-hamburger');
require('./components/open-description');
require('./components/popover');
require('./components/graphic');
require('./components/open-traders');
require('./components/list-cards');

var breakpoint = require('./components/breakpoint');
var slider = require('./components/slider');

var $bp = breakpoint.init();
$bp.on('change:breakpoint', function (e, breakpoint) {
  if (breakpoint === 'desktop') {
    $("body").removeClass('has-menuOpen');
  }
});

slider.init(breakpoint);

