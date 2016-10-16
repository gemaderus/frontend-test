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
var descriptionText = $(".Description-text");

btnDescriptionAction.on("click", function(e) {
  descriptionText.toggleClass("has-openDescription");
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
  }).on('inserted.bs.popover', function () {
    var $this = $(this);
    var popoverId = $this.attr('aria-describedby');
    var popoverPosition = $this.attr('popover-position');
    var $popover = $('#' + popoverId);
    if (popoverPosition === 'bottom-left') {
      $popover.addClass('bottom-left');
      $popover.css('margin-left', ($popover.width() / 2 - $this.outerWidth() / 2 - 15)+'px');
    }

    if (popoverPosition === 'bottom-right') {
      $popover.addClass('bottom-right');
      $popover.css('margin-left', ($this.outerWidth() / 2 - $popover.width() / 2 + 15)+'px');
    }
  });
});

//D3 graphic

var h = 58;
var w = 172;
var padding = [20, 10, 20, 10];

//Graphic 1

var monthlyViews = [
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
];

//Set the ranges

var xScale = d3.scaleLinear()
    .range([padding[3], w - padding[1]]);

var yScale = d3.scaleLinear()
    .range([h-padding[0], padding[2]]);

//Add svg

var svg = d3.select(".graphic1")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

//Set the domain

xScale.domain([1, d3.max(monthlyViews, function(d) {
  return d.month;
})]);

yScale.domain([0, d3.max(monthlyViews, function(d) {
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
    .attr("d", lineGen(monthlyViews))
    .attr("stroke", "#D267C6")
    .attr("stroke-width", 2)
    .attr("fill", "none");

//Graphic 2

var monthlyViews = [
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
];

//Set the ranges

var xScale = d3.scaleLinear()
    .range([padding[3], w - padding[1]]);

var yScale = d3.scaleLinear()
    .range([h-padding[0], padding[2]]);

//Add svg

var svg = d3.select(".graphic2")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

//Set the domain

xScale.domain([1, d3.max(monthlyViews, function(d) {
  return d.month;
})]);

yScale.domain([0, d3.max(monthlyViews, function(d) {
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
    .attr("d", lineGen(monthlyViews))
    .attr("stroke", "#EFAA42")
    .attr("stroke-width", 2)
    .attr("fill", "none");

//Graphic 3

var monthlyViews = [
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
];

//Set the ranges

var xScale = d3.scaleLinear()
    .range([padding[3], w - padding[1]]);

var yScale = d3.scaleLinear()
    .range([h-padding[0], padding[2]]);

//Add svg

var svg = d3.select(".graphic3")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

//Set the domain

xScale.domain([1, d3.max(monthlyViews, function(d) {
  return d.month;
})]);

yScale.domain([0, d3.max(monthlyViews, function(d) {
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
    .attr("d", lineGen(monthlyViews))
    .attr("stroke", "#FB6533")
    .attr("stroke-width", 2)
    .attr("fill", "none");

//Graphic 4

var monthlyViews = [
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
];

//Set the ranges

var xScale = d3.scaleLinear()
    .range([padding[3], w - padding[1]]);

var yScale = d3.scaleLinear()
    .range([h-padding[0], padding[2]]);

//Add svg

var svg = d3.select(".graphic4")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

//Set the domain

xScale.domain([1, d3.max(monthlyViews, function(d) {
  return d.month;
})]);

yScale.domain([0, d3.max(monthlyViews, function(d) {
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
    .attr("d", lineGen(monthlyViews))
    .attr("stroke", "#BCA5D1")
    .attr("stroke-width", 2)
    .attr("fill", "none");


