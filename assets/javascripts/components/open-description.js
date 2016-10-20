var $ = require('jquery');

var btnDescriptionAction = $(".js-button-description");
var description = $(".js-clamp");
var isClamp = true;

btnDescriptionAction.on("click", function(e) {
  isClamp = !isClamp;
  if (isClamp) {
    description.parent().toggleClass('has-openDescription', false);
  } else {
    description.parent().toggleClass('has-openDescription', true);
  }

});
