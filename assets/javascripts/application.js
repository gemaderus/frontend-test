var $ = require('jquery');
require('bootstrap-sass');

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

var btnDescriptionAction = $(".Btn-description-action");
var descriptionText = $(".Description-text");

btnDescriptionAction.on("click", function(e) {
  descriptionText.toggleClass("has-openDescription");
  // btnDescriptionAction.style.transform = rotate(-180deg);
});

$(function () {
  $('[data-toggle="popover"]').popover({
    placement: 'bottom',
    html: true,
    content: function () {
      var id = $(this).data('content-id');
      return $('#' + id).html();
    }
  })
});
