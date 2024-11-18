# Calculator

This is a simple calculator I coded with the intent to use jQuery to make the JavaScript code as short as I could.

I also wanted to keep my JS code out of my HTML, so I used a click event listener to scan the ID of whatever button was clicked and to display the value of that ID on the calculator's main display.

            <button class="orange" id="+">+</button>
            <button id="7">7</button>
            <button id="8">8</button>
            <button id="9">9</button>
            <button class="orange" id="-">-</button>
            <button id="4">4</button>
            <button id="5">5</button>
            <button id="6">6</button>
            <button class="orange" id="*">*</button>
            <button id="1">1</button>
            <button id="2">2</button>
            <button id="3">3</button>
            <button class="orange" id="/">/</button>
            <button id="0">0</button>
            <button id=".">.</button>

Because I was scanning the ID of any button pressed, I did not give the 'C' or '=' buttons an ID as I did not want to display these button values on the main display when pressed. 

            <button class="Calculate">=</button>
            <button class="Clear orange">C</button>

Thanks for checking out my calculator

 Karl
