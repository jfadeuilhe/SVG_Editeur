
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var bSave = {};	// @buttonImage
// @endregion// @endlock

	var Svg = $$("svg");
	var $svg =  $("#svg");

// eventHandlers// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("bSave", "click", bSave.click, "WAF");
// @endregion
};// @endlock
