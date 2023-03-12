const id = parseInt(window.location.search.substr(4));
var json;
var project;
var technologies;
var imgTotal;
var imgName;
var visible = 1;
var invisible = 2;
var imgCurrent = 0;

//const onlineLink = "http://localhost:5000/"
const onlineLink = "https://raw.githubusercontent.com/catalincd/catalincd.github.io/main/res/data.json"

$.getJSON(onlineLink, function(data) {
    json = data;
    project = json.projects[id];
    technologies = json.technologies;
    imgTotal = project.images;
    imgName = getImg(project.thumbnail + 0);
    loadData();
    console.log(project);
});

const getImg = (imgName) => `images/${imgName}.png`;

function loadData() {
    window.document.title = `Project - ${project.name}`;
    $("#title").html(project.name);
    $("#i1").attr("src", imgName);

    for (var i = 0; i < project.platforms.length; i++) {
        $("#links").append(`<img src="images/icons/${project.platforms[i].icon}.png" class="icon">
                            <a href="${project.platforms[i].href}"><h3>${project.platforms[i].name}</h3></a>`);
    }

    for (var i = 0; i < project.features.length; i++) {
        const tech = getTechnology(project.features[i]);
        $("#technologies").append(`<img src="images/icons/${tech.icon}.png" class="icon">
                                   <h3>${tech.text}</h3>
                                    `);
    }
}


function next(iterator = 1) {
    imgCurrent += iterator;
    if (imgCurrent < 0) imgCurrent = imgTotal - 1;
    imgCurrent %= imgTotal;
    swap();
    $(`#i${visible}`).addClass("visibleImg");
    $(`#i${visible}`).removeClass("invisibleImg");
    $(`#i${invisible}`).addClass("invisibleImg");
    $(`#i${invisible}`).removeClass("visibleImg");
    $(`#i${visible}`).attr("src", getImg(project.thumbnail + imgCurrent));
    console.log(imgCurrent);
}

$(document).on("click", "#next", function() {
    next();
});

$(document).on("click", "#prev", function() {
    next(-1);
});

$(document).on("click", "#backButton", function() {
    history.back();
});



const getTechnology = (techName) => technologies.find(x => x.icon == techName);

function swap() {
    var temp = visible;
    visible = invisible;
    invisible = temp;
}