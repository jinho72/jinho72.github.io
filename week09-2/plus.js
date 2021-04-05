console.log("Medium is the Massage");

//global variable are useful in front end web 
// bc you can query the Chrome console for them
let theBody, theWord;
let theButton;


// pass the body of the DOM into a variable
theBody = document.querySelector('body');
theWord = document.querySelector('h2');
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
theButton = document.querySelector('button');


// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', changeWords);

function changeWords() {
    document.getElementById("thisOne").innerHTML = "Catalyst";
    document.getElementById("changingContent").innerHTML = "Until writing was invented, man lived in acoustic space: boundless, directionless, horizonless, in the dark of the mind, in the world of emotion, by primordial intuition, by terror. -------------------------- It is very interesting how the medium served as the catalyst of human behavior. While writing and alphabet allowed people to become individuals with different ideas and beliefs, the smartphone brought our barbaric selves where we constantly engage in this spontaneous events";
        
}

 





// Es6 arrow notiona
document.addEventListener('keydown', theEvent => {
    console.log("key pressed!");
    // theTxt.style.backgroundColor = "pink";

})