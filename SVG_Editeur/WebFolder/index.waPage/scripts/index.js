
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var bSave = {};	// @button
	var dgImages = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	//selImage();

	$('#svg').ready(function() {

	    var ifrm = $('#svg')[0];

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
		
		var $svg_c =  $("#svg").contents().find("#svgcontent");
		
		var txt = $svg_c.html();
		
		alert(txt);

		if(txt != ""){
			WAF.sources.mesImages.txtImage = txt;
			WAF.sources.mesImages.save();
			
			$("#cAffImage").html(txt); 			//L'afficher dans la zone locale
		}
	};// @lock

	dgImages.onRowClick = function dgImages_onRowClick (event)// @startlock
	{// @endlock
		selImage();
	};// @lock
	
	function editor_ready(){
		selImage();
	};
	
	function selImage(){
		
		var $svg_f = $('#svg')[0].contentWindow.svgEditor; 		//Récupération de la racine de svg-edit
		var $aff =  $("#cAffImage");
		var txt = WAF.sources.mesImages.txtImage;
		
		$aff.html(txt);
		$svg_f.loadFromString(txt);
	}

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("bSave", "click", bSave.click, "WAF");
	WAF.addListener("dgImages", "onRowClick", dgImages.onRowClick, "WAF");
// @endregion
};// @endlock
