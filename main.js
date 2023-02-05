canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_array=["image1.jpg","image2.jpg","image3.jpg", "image4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
Rover_width=100;
Rover_height=90;
Rover_x=10;
Rover_y=10;
background_image=nasa_array[random_number];
rover_image="rover.png";
function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    Rover_imgTag=new Image();
    Rover_imgTag.onload=uploadRover;
    Rover_imgTag.src=rover_image;

}
function uploadbackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);


}
function uploadRover()
{
    ctx.drawImage(Rover_imgTag,Rover_x,Rover_y,Rover_width,Rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=="37")
{
    Left();
    console.log("left");
}
if(keypressed=="38")
{
    Up();
    console.log("up");
}
if(keypressed=="39")
{
    Right();
    console.log("right");
}
if(keypressed=="40")
{
    Down();
    console.log("down");
}
}
function Left()
{
    if(Rover_x>=0)
    {
        Rover_x=Rover_x-10;
        console.log("when left arrow is pressed, x= "+Rover_x+" ,y= "+Rover_y);
        uploadbackground();
        uploadRover();

    }
}
function Right()
{
    if(Rover_x<=700)
    {
        Rover_x=Rover_x+10;
        console.log("when right arrow is pressed, x= "+Rover_x+" ,y= "+Rover_y);
        uploadbackground();
        uploadRover();
        
    }
}
function Up()
{
    if(Rover_y>=0)
    {
        Rover_y=Rover_y-10;
        console.log("when up arrow is pressed, x= "+Rover_x+" ,y= "+Rover_y);
        uploadbackground();
        uploadRover();
    }
}
function Down()
{
    if(Rover_y<=500)
    {
        Rover_y=Rover_y+10;
        console.log("when down arrow is pressed, x= "+Rover_x+" ,y= "+Rover_y);
        uploadbackground();
        uploadRover();
    }
}