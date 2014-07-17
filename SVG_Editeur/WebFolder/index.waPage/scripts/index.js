
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bSave = {};	// @button
	var dgImages = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	//selImage();

	$('#svg').find("iframe").ready(function() {

	    var ifrm = $('#svg').find("iframe")[0];

	    // waiting for real load
	    (function(){
	                try {
	                    ifrm.contentWindow.svgEditor.ready(function() { editor_ready();});
	                }
	                catch (Ex){
	                    setTimeout(arguments.callee, 1000);
	                }
	            })();
	});
	
	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		//var $svg =  $("#svg").contents().find("#svgcontent");
		//var txt = $svg_f = $('#svg')[0].contentWindow.svgEditor.find("#svgcontent").html();
		
		//var $svg_c =  $("#svg").find("iframe").contents().find("#svgcontent");
		//var txt = $svg_c.html();
		
		var $svg_c =  $("#svg").find("iframe").contents().find("#svg_source_textarea");
		var txt = $svg_c.val();

		if((txt != "") && ($svg_c.is(":visible")==true)){
			WAF.sources.mesImages.txtImage = txt;
			WAF.sources.mesImages.save();
			$("#cAffImage").html(txt); 			//L'afficher dans la zone locale
		} else
			alert("Vous devez ouvrir le source svg pour le récupérer !\nCliquez sur le bouton <SVG>");
	};// @lock

	dgImages.onRowClick = function dgImages_onRowClick (event)// @startlock
	{// @endlock
		selImage();
	};// @lock
	
	function editor_ready(){
		selImage();
	};
	
	function selImage(){
		
		var $svg_f = $('#svg').find("iframe")[0].contentWindow.svgEditor; 		//Récupération de la racine de svg-edit
		var $aff =  $("#cAffImage");
		var txt = WAF.sources.mesImages.txtImage;
		
		$aff.html(txt);
		$svg_f.loadFromString(txt);
	}

// @region eventManager// @startlock
	WAF.addListener("bSave", "click", bSave.click, "WAF");
	WAF.addListener("dgImages", "onRowClick", dgImages.onRowClick, "WAF");
// @endregion
};// @endlock
