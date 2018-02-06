$("#model").click(function() {
	$("nav").toggleClass("open-sub-menu");

});
$("main").click(function() {
	$("nav").removeClass("open-sub-menu");
});
$("#show-prices").click(function() {
	$(".prices-content section").toggleClass('open-table-prices');
	$("#show-prices .show-text").toggle();
  $("#show-prices .hide-text").toggle();
});

$.getJSON("js/prices.json", function(prices){
  //create a new ul
  $("#table-prices").append(
    '<ul class="prices"></ul>'
  );
  // Loop through an array/list
  for(let shop in prices){
		let price = prices[shop];
    $("ul.prices").append(
			'<li><h4>'+shop+'</h4> '+price +' </li>');
  }
});
