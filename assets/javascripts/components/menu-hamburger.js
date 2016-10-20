var $ = require('jquery');

var buttonOpen = $(".Btn-open");
var buttonClose = $(".Btn-close");
var $body = $("body")

buttonOpen.on("click", function(e) {
  $body.toggleClass("has-menuOpen", true);
});

buttonClose.on("click", function(e) {
  $body.toggleClass("has-menuOpen", false);
});
