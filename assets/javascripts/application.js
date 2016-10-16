var $ = require('jquery');

// var foo = require('./components/foo');

// $(function(){
//   foo.attachTo("body");

//   hljs.initHighlightingOnLoad();
// });

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

