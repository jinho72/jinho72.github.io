const record1 = document.querySelector('.rec1');
const record2 = document.querySelector('.rec2');
const record3= document.querySelector('.rec3');
const record4 = document.querySelector('.rec4');
const record5 = document.querySelector('.rec5');
const record6 = document.querySelector('.rec6');
const record7 = document.querySelector('.rec7');
const record8 = document.querySelector('.rec8');
const record9 = document.querySelector('.rec9');
const record10 = document.querySelector('.rec10');
const record11 = document.querySelector('.rec11');
const record12 = document.querySelector('.rec12');


const stop1 = document.querySelector('.stop1');
const stop2 = document.querySelector('.stop2');
const stop3= document.querySelector('.stop3');
const stop4 = document.querySelector('.stop4');
const stop5 = document.querySelector('.stop5');
const stop6 = document.querySelector('.stop6');
const stop7 = document.querySelector('.stop7');
const stop8= document.querySelector('.stop8');
const stop9= document.querySelector('.stop9');
const stop10= document.querySelector('.stop10');
const stop11= document.querySelector('.stop11');
const stop12= document.querySelector('.stop12');

const recorded = document.querySelector('.recording1');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia Supported');
    navigator.mediaDevices.getUserMedia (
        {
            audio: true
    })
    .then(function(stream) { //success callback
        console.log('recording...')
    })
    .catch(function(err) { //error callback
        console.log('Following error occurred: err' + err); //error message
    } 
    );
} else {
    console.log('no browser support');
}

const mediaRecorder = new MediaRecorder(stream);

record1.onclick = function() {
    mediaRecorder.start(); //start recording when record button is pressed
    console.log(mediaRecorder.state);
    console.log("recorder1 started");
}

let chunks = [];

mediaRecorder.ondataavailable = function(e) { //this collects data as the recording progresses
    chunks.push(e.data);
}

stop1.onclick = function() {
    mediaRecorder.stop(); //stop recording when the stop button is pressed
    console.log(mediaRecorder.state);
    console.log("recorder1 stopped");
}

mediaRecorder.onstop = function(e) {
    console.log('recorder stopped')

    const clipname = prompt('Enter a name for your sound clip');

    const clipContainer = document.createElement('article');// this sections creates an HTML structure
    const clipLabel = document.createElement('p');
    const audio = document.createElement('audio');
    const deleteButton = document.createElement('button');

    clipContainer.classList.add('clip');
    audio.setAttribute('controls', '');
    deleteButton.innerHTML = "Delete";
    clipLabel.innerHTML = clipName;

    clipContainer.appendChild(audio);
    clipContainer.appendChild(clipLabel);
    clipContainer.appendChild(deleteButton);
    soundClips.appendChild(clipContainer);

    const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;

    deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
    }
}