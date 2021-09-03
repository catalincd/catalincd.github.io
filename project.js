const id = parseInt(window.location.search.substr(4));
var json;
var project;
var imgTotal;
var imgName;
var visible = 1;
var invisible = 2;
var imgCurrent = 0;
//$.getJSON("https://raw.githubusercontent.com/catalincd/catalincd.github.io/main/res/data.json", function(data) {
$.getJSON("http://localhost:5000/", function(data) {
    json = data;
    project = json.projects[id];
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

function swap() {
    var temp = visible;
    visible = invisible;
    invisible = temp;
}