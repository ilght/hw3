# hw3
What code draws the blades of grass?
What code makes the "lawnmower" come by? How often does it come by?
What's the point of the h variable?
What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

1. line(x, height-10, x+random(-10, 10), height-10-random(h));

2.  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
    Only if grass(1000) > 999
    
3. h controls the random hight

4. Making sure that each grass is been limited.
