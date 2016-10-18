var $ = require('jquery');
require('bootstrap-sass');
var d3 = require('d3');

var buttonOpen = $(".Btn-open");
var buttonClose = $(".Btn-close");
var $content = $(".js-content")

buttonOpen.on("click", function(e) {
  $content.toggleClass("has-menuOpen", true);
  buttonOpen.hide();
  buttonClose.show();
});

buttonClose.on("click", function(e) {
  $content.toggleClass("has-menuOpen", false);
  buttonOpen.show();
  buttonClose.hide();
});

var btnDescriptionAction = $(".js-button-description");
var description = $(".Description");

btnDescriptionAction.on("click", function(e) {
  description.toggleClass("has-openDescription");
  $(this).toggleClass("has-openDescription");
});

$(function () {
  $('[data-toggle="popover"]').popover({
    placement: 'bottom',
    html: true,
    content: function () {
      var id = $(this).data('content-id');
      return $('#' + id).html();
    }
  }).on('inserted.bs.popover', function (e) {
    // e.stopPropagation();
    var $this = $(this);
    var popoverId = $this.attr('aria-describedby');
    var popoverPosition = $this.attr('popover-position');
    var $popover = $('#' + popoverId);
    if (popoverPosition === 'bottom-left') {
      $popover.addClass('bottom-left');
      $popover.css('margin-left', ($popover.width() / 2 - $this.outerWidth() / 2 - 10)+'px');
    }

    if (popoverPosition === 'bottom-right') {
      $popover.addClass('bottom-right');
      $popover.css('margin-left', ($this.outerWidth() / 2 - $popover.width() / 2 + 10)+'px');
    }
  });

  // e.stopPropagation()
});


$('body').on('click', function(e) {
  $('[data-toggle=popover]').each(function() {
    // hide any open popovers when the anywhere else in the body is clicked
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});

//D3 graphic

var drawStat = function (data, selector, color) {
  var h = 58;
  var w = 172;
  var padding = [5, 10, 5, 10];

  var xScale = d3.scaleLinear()
    .range([padding[3], w - padding[1]]);

  var yScale = d3.scaleLinear()
      .range([h-padding[0], padding[2]]);

  //Add svg

  var svg = d3.select(selector)
            .append("svg")
            .attr("width", w)
            .attr("height", h);

  //Set the domain

  xScale.domain([1, d3.max(data, function(d) {
    return d.month;
  })]);

  yScale.domain([0, d3.max(data, function(d) {
    return d.views;
  })]);

  //Define the line

  var lineGen = d3.line()
      // .curve(d3.curveLinear());
      .x(function(d) {
        return xScale(d.month);
      })
      .y(function(d) {
        return yScale(d.views);
      });
      // .interpolate("basis");

  svg.append("path")
      .attr("d", lineGen(data))
      .attr("stroke", color)
      .attr("stroke-width", 2)
      .attr("fill", "none");
}

//Graphic 1

drawStat([
  {month: 1, views: 3},
  {month: 2, views: 200},
  {month: 3, views: 80},
  {month: 4, views: 700},
  {month: 5, views: 300},
  {month: 6, views: 150},
  {month: 7, views: 600},
  {month: 8, views: 800},
  {month: 9, views: 340},
  {month: 10, views: 80},
  {month: 11, views: 200},
  {month: 12, views: 10}
], ".graphic1", "#D267C6");

//Graphic 2

drawStat([
  {month: 1, views: 10},
  {month: 2, views: 3000},
  {month: 3, views: 150},
  {month: 4, views: 20},
  {month: 5, views: 1000},
  {month: 6, views: 1200},
  {month: 7, views: 3000},
  {month: 8, views: 800},
  {month: 9, views: 340},
  {month: 10, views: 80},
  {month: 11, views: 200},
  {month: 12, views: 10}
], ".graphic2", "#EFAA42");

//Graphic 3

drawStat([
  {month: 1, views: 3},
  {month: 2, views: 1000},
  {month: 3, views: 2000},
  {month: 4, views: 700},
  {month: 5, views: 100},
  {month: 6, views: 1200},
  {month: 7, views: 600},
  {month: 8, views: 1800},
  {month: 9, views: 1040},
  {month: 10, views: 600},
  {month: 11, views: 1200},
  {month: 12, views: 10}
], ".graphic3", "#FB6533");

//Graphic 4

drawStat([
  {month: 1, views: 3},
  {month: 2, views: 800},
  {month: 3, views: 300},
  {month: 4, views: 100},
  {month: 5, views: 750},
  {month: 6, views: 500},
  {month: 7, views: 350},
  {month: 8, views: 800},
  {month: 9, views: 340},
  {month: 10, views: 80},
  {month: 11, views: 900},
  {month: 12, views: 10}
], ".graphic4", "#BCA5D1");

//Graphic 5

drawStat([
  {month: 1, views: 3},
  {month: 2, views: 200},
  {month: 3, views: 80},
  {month: 4, views: 700},
  {month: 5, views: 300},
  {month: 6, views: 150},
  {month: 7, views: 600},
  {month: 8, views: 800},
  {month: 9, views: 340},
  {month: 10, views: 80},
  {month: 11, views: 200},
  {month: 12, views: 10}
], ".graphic5", "#D267C6");

//Graphic 6

drawStat([
  {month: 1, views: 10},
  {month: 2, views: 3000},
  {month: 3, views: 150},
  {month: 4, views: 20},
  {month: 5, views: 1000},
  {month: 6, views: 1200},
  {month: 7, views: 3000},
  {month: 8, views: 800},
  {month: 9, views: 340},
  {month: 10, views: 80},
  {month: 11, views: 200},
  {month: 12, views: 10}
], ".graphic6", "#EFAA42");

//Graphic 7

drawStat([
  {month: 1, views: 3},
  {month: 2, views: 1000},
  {month: 3, views: 2000},
  {month: 4, views: 700},
  {month: 5, views: 100},
  {month: 6, views: 1200},
  {month: 7, views: 600},
  {month: 8, views: 1800},
  {month: 9, views: 1040},
  {month: 10, views: 600},
  {month: 11, views: 1200},
  {month: 12, views: 10}
], ".graphic7", "#FB6533");

//Graphic 8

drawStat([
  {month: 1, views: 3},
  {month: 2, views: 800},
  {month: 3, views: 300},
  {month: 4, views: 100},
  {month: 5, views: 750},
  {month: 6, views: 500},
  {month: 7, views: 350},
  {month: 8, views: 800},
  {month: 9, views: 340},
  {month: 10, views: 80},
  {month: 11, views: 900},
  {month: 12, views: 10}
], ".graphic8", "#BCA5D1");

//Slider
//

//Queremos mover cada uno de los li Stat
//

$btnLeft = $("#btn-slide-left");
$btnRight = $("#btn-slide-right");

var sliderPhotos = $(".Stats");

var offSet = -300;
var index = 0;

function move(index) {
  sliderPhotos.style.transform = "translateX("+(offSet*index)+"px";
}

function recalculate(index) {
  if (index ==8) {
    buttonNext.setAttribute("disabled", true);
  } else {
    buttonNext.removeAttribute("disabled", false);
  }

  if (index==0) {
    buttonPrev.setAttribute("disabled", true);
  } else {
    buttonPrev.removeAttribute("disabled", false);
  }
}

$btnRight.on("click", function() {
  index++;
  move(index);
  recalculate(index);
});

$btnLeft.on("click", function() {
  index--;
  move(index);
  recalculate(index);
})
