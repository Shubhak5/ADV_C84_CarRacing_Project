canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//setting dimension and position of car1
car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_img = "car1.jpg";

//setting dimension and position of car2
car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 100;
car2_img = "car2.jpg";

//Mars image and Rover Image
canvas_racing_bg = "canvasRacing.jpg";

function add() {
    racing_bg_img = new Image(); //defining a variable with new Image
    racing_bg_img.onload = uploadBackground; //setting the function, onloading this variable
    racing_bg_img.src = canvas_racing_bg; //load Image

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(racing_bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    //Car1 Key controls
    if (keyPressed == '37') {
        car1_left();
        console.log("left");
    }
    if (keyPressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down");
    }

    //Car2 Key controls
    if (keyPressed == '65') {
        car2_left();
        console.log("left");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("up");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("right");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("down");
    }

}