var canvas = document.querySelector('canvas');

canvas.height = 500;
canvas.width= 1400;

var context = canvas.getContext('2d');
var down = false;
context.lineWidth= 5;


canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown',function(){
    down = true;
    context.beginPath();
    context.moveTo(xPos, ypos);
    canvas.addEventListener("mousemove",draw);
});

canvas.addEventListener('mouseup', function() {
    down = false;
});

function draw(z){
    var xPos = z.clientX - canvas.offsetLeft;
    var yPos = z.clientY - canvas.offsetTop;

    if(down === true)
    {
        context.lineTo(xPos, yPos);
        context.stroke();
    }
}
function clearCanvas(){
    context.beginPath();
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(background,0,0)

}
function brushSmall(){
    context.lineWidth = 5;
}
function brushMedium(){
    context.lineWidth = 9;
}
function brushLarge(){
    context.lineWidth = 13;
}
function colorRed(){
    context.strokeStyle ="red";
}
function colorOrange(){
    context.strokeStyle ="orange";
}
function colorYellow(){
    context.strokeStyle ="yellow";
}
function colorBlue(){
    context.strokeStyle ="blue";
}
function colorGreen(){
    context.strokeStyle ="green";
}
function colorBlack(){
    context.strokeStyle ="black";
}
function colorPurple(){
    context.strokeStyle ="purple";
}
function colorWhite(){
    context.strokeStyle ="white";
}