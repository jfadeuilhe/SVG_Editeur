
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dgImages = {};	// @dataGrid
// @endregion// @endlock

	var Svg = $$("svg");
	var $svg =  $("#svg");

// eventHandlers// @lock

	dgImages.onRowClick = function dgImages_onRowClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dgImages", "onRowClick", dgImages.onRowClick, "WAF");
// @endregion
};// @endlock
