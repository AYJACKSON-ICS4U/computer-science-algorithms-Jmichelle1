var drawShape = function(x, y, radius) {
    //set colour
    var colour = 255 - radius;
    fill(colour, 0, colour);
    
    //draw four circles
    //top left
    ellipse(x, y, radius, radius);
    //top right
    ellipse(x + (x * 2), y, radius, radius);
    //bottom right
    ellipse(x + (x * 2), y + (y * 2), radius, radius);
    //bottom left
    ellipse(x, y + (y * 2), radius, radius);
    
    //set new radius (half of previous)
    var newRadius = radius/2;
    if (newRadius >= 2) {
        drawShape(x, y, newRadius);
    }
};

//declare var
var position = 2;

//loop to draw pattern
while(position < 257) {
    drawShape(width/position, height/position, (width+height)/position);
    //increase position
    position *= 2;
}
