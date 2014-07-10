
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
		var $svg =  $("#svg").contents().find("#svgcontent");
	//debugger;	
//		if(svg != null)
//			WAF.sources.mesImages.txtImage = $svg;
	};// @lock

	dgImages.onRowClick = function dgImages_onRowClick (event)// @startlock
	{// @endlock
		selImage();
		
	//debugger;
		//var txt = WAF.sources.mesImages.txtImage.getValue;
		
//		if(WAF.sources.mesImages.txtImage != "")
//			$svg.innerHTML(WAF.sources.mesImages.txtImage);
			
	};// @lock
	
	function selImage(){
		
		var $svg =  $("#svg").contents().find("#svgcontent");
		var $aff =  $("#cAffImage");
		var txt = "";
		
		if(WAF.sources.mesImages.txtImage != ""){
			txt = WAF.sources.mesImages.txtImage;
		}
		$("#cAffImage").html(txt);
	}

// @region eventManager// @startlock
	WAF.addListener("bSave", "click", bSave.click, "WAF");
	WAF.addListener("dgImages", "onRowClick", dgImages.onRowClick, "WAF");
// @endregion
};// @endlock
