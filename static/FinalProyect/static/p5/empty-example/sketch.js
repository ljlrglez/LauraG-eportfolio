
let flag = true;
let r= 3, g= 249, b=3;
let r1=249,g1= 3,b1= 235;
var cnv;


function centerCanvas() 
{
  var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  cnv.position(x, 400);
}

function windowResized() {
  centerCanvas();
}

function setup() 
  {
  cnv = createCanvas(400,200);
  centerCanvas();	
  }

function draw() 
   {    
     
     
    if (flag===true)
      {
       background(r,g,b);
       textFont ("Comic Sans MS");
       textAlign(CENTER); 
       textSize(35);	
       fill(r1,g1,b1); 
       text("Let's Save the Planet ", 190,105);
       }
    else 
       {
        background(r,g,b);
       	textFont ("Comic Sans MS");
        textAlign(CENTER); 
        textSize(35);       	
        fill(r1,g1,b1); 
        text("The Power is ours", 190,105);
        }  
   } 
     
  
function mousePressed()
{   
    r = random(255);
    g = random(255);
    b = random(255); 
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
	if (flag===false)	
		{
			flag=true;
		}
    else 
       {
    	if (flag ===true)
    	  {
    	  	flag=false;
    	   }        
       }        
}