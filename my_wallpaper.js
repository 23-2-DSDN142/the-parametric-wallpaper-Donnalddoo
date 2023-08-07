//your parameter variables go here!
let stemColor = ("#3cdc50");
let flowerColor = ("#fff5ff");
let bg = ("#5e71bf");
let decalColor = ("#4da788")
let decalStroke = (5)
let stemsize = (10);
let offset = (100);
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = offset;
}

function wallpaper_background() {
  background(bg); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES)
  if(offset == 0){
    stroke(decalColor);
    strokeWeight(decalStroke)
    noFill();
    line(200,0,0,200)
    line(0,0,200,200)
    }
    else if(offset == 100){
      stroke(decalColor);
      strokeWeight(decalStroke)
      noFill();
      line(200,0,0,100)
      line(0,0,200,100)
      }
      else{
        decalColor = ("#2c5e54");
        stroke(decalColor);
        strokeWeight(decalStroke)
        line(0,0,0,200)
        line(35,0,-35,200)
        line(-35,0,35,200)
      }
  noStroke();
  fill(flowerColor)
  ellipse(100,100,100,90);//Petal base
  triangle(55,100,120,130,40,160);//Petal
  triangle(80,130,145,100,160,160);//Petal
  triangle(55,110,145,110,100,165);//Petal
  arc(45,120,95,80,30,100,)
  arc(155,120,95,80,80,150,)
  arc(71,133.4,95,80,10,47,OPEN)
  arc(129,133.4,95,80,133,170,OPEN)
  fill(bg)
  arc(36,127,35,68,270,120)
  arc(164,127,35,68,60,270)
  fill(stemColor);
  strokeWeight(stemsize);
  stroke(stemColor);
  noFill();
  curve(200,500,100,52,200,60,100,200,);//stem
  line(200,0,200,200)// stem
  noStroke();
  fill(stemColor);
  quad(85,59,100,50,115,59,100,57)
  triangle(95,55,100,61,105,55)
  curve(0,0)
}
