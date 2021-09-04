var json;
var projects;
var technologies;
$.getJSON("https://raw.githubusercontent.com/catalincd/catalincd.github.io/main/res/data.json", function(data) {
    //$.getJSON("http://localhost:5000/", function(data) {
    json = data;
    projects = json.projects;
    technologies = json.technologies;
    loadData(json.info);
    loadSkills(json.skills);
    loadProjects(json.mainProjects);
    loadGames(json.games);
    loadCSProjects(json.csprojects);
});


function loadSkills(skills) {
    for (var i = 0; i < skills.length; i++) {
        var lines = "";
        for (var t = 0; t < skills[i].length; t++) {

            var id = parseInt(skills[i][t]);
            lines += `<div class="skill">
                        <img src="images/icons/${technologies[id].icon}.png" class="skillIcon">
                        <h3>${technologies[id].text}</h3>
                    </div>`
        }

        var title = "";
        $("#skillsTable").append(`<div class="skillsColumn">${title}${lines}</div>`);
    }
}

function loadData(info) {
    for (var i = 0; i < info.length; i++) {
        $("#info").append(`<h3 class="material-icons-outlined">${info[i].icon}</h3><h3>${info[i].text}</h3>`);
    }
}

function loadProjects(mainProjects) {
    for (var i = 0; i < mainProjects.length; i++) {
        var id = mainProjects[i].id;
        var img = `images/${projects[id].thumbnail}0.png`;
        $("#projects").append(`<a href="${projects[id].href}" class="card">
	    						<div class="glow"></div>
	                            <img src="${img}">
	                            <div class="bottomText">
	                                <h1 class="h1Text">${projects[id].name}</h1>
	                            </div>
	                        </a>`);
    }
}

function loadGames(games) {
    console.log(projects);
    for (var i = 0; i < games.length; i++) {
        var id = games[i].id;
        var img = `images/${projects[id].thumbnail}0.png`;
        $("#cards").append(`<a href="${projects[id].href}" class="card">
	    						<div class="glow"></div>
	                            <img src="${img}">
	                            <div class="bottomText">
	                                <h1 class="h1Text">${projects[id].name}</h1>
	                            </div>
	                        </a>`);
    }
}

function loadCSProjects(csprojects) {
    for (var i = 0; i < csprojects.length; i++) {
        var id = csprojects[i].id;
        var img = `images/${projects[id].thumbnail}0.png`;
        $("#csprojects").append(`<a href="${projects[id].href}" class="card">
	    						<div class="glow"></div>
	                            <img src="${img}">
	                            <div class="bottomText">
	                                <h1 class="h1Text">${projects[id].name}</h1>
	                            </div>
	                        </a>`);
    }
}