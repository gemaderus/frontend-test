var $ = require('jquery');

$tradersTrigger = $("#traders-trigger");
$tradersContainer = $("#traders-container");
$icon = $(".Btn-tradersIcon");

$tradersTrigger.on("click", function(e) {
  $tradersContainer.toggleClass("Open-traders");
})
