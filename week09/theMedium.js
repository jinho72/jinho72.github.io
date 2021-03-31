console.log("the message is here!");

//global variable are useful in front end web 
// bc you can query the Chrome console for them
let theBody, theTxt;

// pass the body of the DOM into a variable
theBody = document.querySelector("body");
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
let theButton = document.getElementById("myButton");
theTxt = document.querySelector('h2');
var theSlider = document.getElementById('myRange');
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = changeColorWithSlide() {
  output.innerHTML = this.value;
}

// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', myGreatFunction);
theButton.addEventListener('mouseover', newFunction);
theButton.addEventListener('mouseout', secondFunction);


 






function secondFunction() {
    console.log("mouse is out");
    theButton.style.backgroundColor = "yellow";
    theButton.textContent = "NOT HOVERING"
    theButton.style.width = "200px";
}

function newFunction() {
    console.log("mouse is hovering");
    theButton.style.backgroundColor = "light blue";
    theButton.textContent = "HOVERING"
    theButton.style.width = "50px";
}


function myGreatFunction(){
    console.log("clicked!");
    //jay lays it down
   theBody.style.backgroundColor = "pink";
   theTxt.textContent = "A NEW BUTTON"
   theButton.style.backgroundColor = "blue";
}

// Es6 arrow notiona
document.addEventListener('keydown', theEvent => {
    console.log("key pressed!");
    // theTxt.style.backgroundColor = "pink";

})