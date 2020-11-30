var diam1 = 15;
var count = 0;
let flag = false;


function setup() {
  createCanvas(400, 400); 
 
  
}

function draw() 
{
noCursor();  
background(220,0,65);
if (count < 4 ) //
  { 
  if (flag===false)
    {
     fill ("#000000");
     noStroke();
     textSize (40);
     textFont ("Comic Sans MS");
     textAlign(CENTER);
     text("Who I'm ?", 190,50);
     ellipse (mouseX,mouseY, diam1,diam1)
     ellipse (200,200,100,80);
     rect (175,230, 50,40,10); 
     ellipse (200,310,150,120);

        
     }
  else
    {
     if (flag ===true)	
     {	
       fill ("#ffff00");
       noStroke ();
       textSize (38);
       textFont ("Comic Sans MS");
       textAlign(CENTER);
       text("Snow man or Chicken?",190,50);       
       ellipse (200,200,100,80); //head
       rect (175,230, 50,40,10); //neck
       ellipse (200,310,150,120);//body
       
       fill(0,250,0);
       ellipse (mouseX,mouseY, diam1,diam1)//mouse
       fill (250,91,4);
       rect(145,155,100,10,10);//hat
       rect(177,140,40,20);


       noFill();
       stroke(255, 0, 0);
       strokeWeight(3)
       arc(200, 205, 45, 45, 0, PI / 1.0); //mouth
       fill (255,0,0);
       triangle(200, 200, 205, 205, 195, 205);//nose
       fill(0);
       noStroke();
       ellipse (185,190,10,8); //left eye
       ellipse (215,190,10,8);//right eye
       rect (180 ,368,10,20); //feet 
       rect (220 ,367,10,20);
       rect (170 ,388,20,10); 
       rect (220 ,387,20,10);
       rect (190,237,20,10);//pajarita       
       rect (113,280,20,10);//arm
       rect (268,280,20,10);//arm
       ellipse (200,287,20,20);//button 1
       ellipse (200,315,20,20);//buttons 2
       ellipse (200,343,20,20);//buttons 2
       
      }
      }
  }
else
  {
   if (count ===4)
     {stroke(4,241,250);
      noFill();
     }
  background(0);
  cursor(); 
  textSize (40);
  textFont ("Comic Sans MS");
  textAlign(CENTER);
  textStyle(ITALIC);
  text("The End", 160,320);  
  for (let i = 0; i < 200; i += 20) 
  {
    bezier(mouseX - i / 2.0,
           40 + i,
           410,
           20,
          440,
          300,
          240 - i / 16.0,
         300 + i / 8.0);
  }
  }
  ///
  
 } 
    
    
function mousePressed()
{
    count = count+1;
	if (flag===false)	
		{
			diam1=25;
			flag=true;
		}
    else 
       {
    	if (flag ===true)
    	  {
    	  	flag=false;
    	  	diam1=15;
    	  }        
       }        
}