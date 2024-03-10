Interactive Rectangle Color Change
It is an interactive rectangle that changes color based on the position of the mouse cursor within the rectangle.

Features
The rectangle changes its background color dynamically as the mouse moves over it. The color transitions smoothly between red and blue based on the horizontal position of the mouse cursor within the rectangle.
Smooth Animation: The color transition is achieved using the GreenSock Animation Platform (GSAP), providing smooth and visually appealing animations.

Usage
Include the GSAP library in index.html file
Run the code in browser and jusy move your mouse cursor over the rectangle to see the color change effect.

Explanation
The code uses the addEventListener method to listen for mousemove and mouseleave events on the rectangle element (#cen).

When the mouse moves over the rectangle, the code calculates the horizontal position of the mouse cursor relative to the left edge of the rectangle (insiderecval). Based on this position, it determines whether the cursor is on the left or right side of the rectangle.

If the cursor is on the left side, the code maps the cursor position to a red color value (redcol) and if the cursor is on the right side, it maps the position to a blue color value (bluecol).

The gsap.to() method is then used to animate the background color of the rectangle to the calculated rgb color value.

When the mouse leaves the rectangle, the background color is changed again back to white.

Dependencies
GSAP: A JavaScript animation library used for smooth and performant animations.
