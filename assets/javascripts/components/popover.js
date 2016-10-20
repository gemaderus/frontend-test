var $ = require('jquery');
require('bootstrap-sass');

$(function () {
  $('[data-toggle="popover"]').popover({
    placement: 'bottom',
    html: true,
    content: function () {
      var id = $(this).data('content-id');
      return $('#' + id).html();
    }
  }).on('inserted.bs.popover', function (e) {
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
});


$('body').on('click', function(e) {
  $('[data-toggle=popover]').each(function() {
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
