var json;
$.getJSON("https://raw.githubusercontent.com/catalincd/catalincd.github.io/main/res/data.json", function(data) {
    //$.getJSON("http://localhost:5000/", function(data) {
    json = data;
    loadData(json.info);
    loadSkills(json.skills)
    loadGames(json.games);
});


function loadSkills(skills) {
    for (var i = 0; i < skills.length; i++) {
        var lines = "";
        for (var t = 0; t < skills[i].lines.length; t++) {
            lines += `<div class="skill">
                        <img src="images/icons/${skills[i].lines[t].icon}.png" class="skillIcon">
                        <h3>${skills[i].lines[t].text}</h3>
                    </div>`
        }

        var title = "";
        //title = <h2>${skills[i].title}</h2>;

        $("#skillsTable").append(`<div class="skillsColumn">${title}${lines}</div>`);
    }
}

function loadData(info) {
    for (var i = 0; i < info.length; i++) {
        $("#info").append(`<h3 class="material-icons-outlined">${info[i].icon}</h3><h3>${info[i].text}</h3>`);
    }
}

function loadGames(games) {
    for (var i = 0; i < games.length; i++) {
        var img = `images/${games[i].thumbnail}.png`;
        $("#cards").append(`<a href="#" class="card">
	    						<div class="glow"></div>
	                            <img src="${img}">
	                            <div class="bottomText">
	                                <h1 class="h1Text">${games[i].name}</h1>
	                            </div>
	                        </a>`);
    }
}