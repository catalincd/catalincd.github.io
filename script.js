var imgs = ["bmbjmp", "maze", "shoota", "tefm", "runner", "balance", "motion", "blocks"];




var json;
$.getJSON("http://localhost:5000/", function(data){
	json = data;
	loadData(json);
});


function loadData(jsn){
	for(var i=0;i<jsn.length;i++)
	{
	    var img = `images/${jsn[i].thumbnail}.png`;
	    $("#cards").append(`<a href="#" class="card">
	    						<div class="glow"></div>
	                            <img src="${img}">
	                            <div class="bottomText">
	                                <h1 class="h1Text">${jsn[i].name}</h1>
	                            </div>
	                        </a>`);
	}
}

//
