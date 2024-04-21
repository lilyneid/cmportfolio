//Let's start by adapting our drawable text to fade
//To make it more readable, we'll just generate one word / click
//Try changing the lines, colors, and alphas!
//Again, changing lines is just like Tracery grammars
lines=["Angela","the Words","hands!","a fog knitting","Trans-","there will be light","apocalypse","sunset glow","is Here","-cendent"]
//We will use i to track which line we just showed
i=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
//Try changing the initial background color
	background(0, 0, 0);
}

//This draws the word with each mouse click
function mouseClicked() {
	//This sets the text size to random - try changing more properties
	textSize(random(20,100));
	//Try any web safe font
	textFont("Garamond");
	//This centers the text on the click
	textAlign(CENTER, CENTER);
	//This sets the fill to a static color - can you make it random?
	fill(r, g, b);
	//This uses the next line at the mouse position
	text(lines[i], mouseX, mouseY);
	if (i<(lines.length-1)) {
		i++;
	}
	else {
		i=0;
	}
}

function mousePressed() {
  // Generate new random color values when the mouse is pressed
  r = random(255);
  g = random(255);
  b = random(255);
}