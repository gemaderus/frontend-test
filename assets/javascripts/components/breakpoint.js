var $ = require('jquery');
var breakpoint;

// Based in https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript

module.exports = {
  init: function () {
    var self = this;
    $(window).resize(function () {
      self.refresh();
    }).resize();
    return $(this);
  },

  refresh: function () {
    var value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    if (value !== breakpoint) {
      breakpoint = value;
      $(this).trigger('change:breakpoint', breakpoint);
    }
  },

  value: function () {
    return breakpoint;
  }
}
