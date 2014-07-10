
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bSave = {};	// @button
	var dgImages = {};	// @dataGrid
// @endregion// @endlock

	//var Svg = $$("svg");
	//var $svg =  $("#svgroot");

// eventHandlers// @lock

	selImage();

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		//var $svg =  $("#svg").contents().find("#svgcontent");
		
		//var txt =  $("#svg").contents().find("#svgcontent").html();
		
		//alert(txt);
	//debugger;	
//		if(svg != null)
		//WAF.sources.mesImages.txtImage = txt.value;
		//WAF.sources.mesImages.save();
		
		selImage();
		
	};// @lock

	dgImages.onRowClick = function dgImages_onRowClick (event)// @startlock
	{// @endlock
		selImage();
		selImage();
	};// @lock
	
	function selImage(){
		
		var $svg =  $("#svg").contents().find("#svgcontent");
		var $aff =  $("#cAffImage");
		var txt = "";
	//debugger;
		if(WAF.sources.mesImages.txtImage != ""){
			txt = WAF.sources.mesImages.txtImage;
		}
		$aff.html(txt);
		$svg.html(txt);
	}

// @region eventManager// @startlock
	WAF.addListener("bSave", "click", bSave.click, "WAF");
	WAF.addListener("dgImages", "onRowClick", dgImages.onRowClick, "WAF");
// @endregion
};// @endlock
