var $ = require('jquery');

$btnLeft = $("#btn-slide-left");
$btnRight = $("#btn-slide-right");

var $slider = $(".js-stats");
var totalItems = $(".js-stat").length - 1;
var index = 0;
var margin = 10;
var breakpointController;
var max;

function move(index, animated) {
  var $item = $(".js-stat").eq(index);
  var offset = $item.position().left;

  if (animated === true) {
    $slider.animate({
      left: (offset * -1)
    }, 'fast');
  } else {
    $slider.css('left', (offset * -1));
  }
}

function recalculateButtons(index) {
  if (index < max) {
    $btnRight.attr("disabled", false);
  } else {
    $btnRight.attr("disabled", true);
  }

  if (index > 0) {
    $btnLeft.attr("disabled", false);
  } else {
    $btnLeft.attr("disabled", true);
  }
}

function doMove(step) {
  var animated = step !== 0;
  var itemsWindow = breakpointController.value() === 'bigdesktop' ? 4 : 3;
  max = totalItems - itemsWindow + 1;
  index = index + step;

  if (index > max) {
    doMove(-1);
  } else {
    move(index, animated);
    recalculateButtons(index);
  }
}

module.exports = {
  init: function (breakpoint) {
    breakpointController = breakpoint;

    $btnRight.on("click", function() {
      doMove(1);
    });

    $btnLeft.on("click", function() {
      doMove(-1);
    });

    $(window).on('resize', function () {
      doMove(0);
    }).resize();
  }
}
