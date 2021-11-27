img = "";
objects = [];
status = "";
function preload() {
    livingRoom = loadImage('LIVINGroom.PNG');
    BedRoom = loadImage('BEDroom.PNG');
    Kitchen = loadImage('KITCHENroom.PNG')
    StudyRoom = loadImage('STUDYroom.PNG')
    OfficeRoom = loadImage('WORKarea.PNG')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
if(error) {
    console.log(error);
} else {
    console.log(results);
    objects = results
}
}

