//verify devices permission acccess

const devicesStatus = document.getElementsByClassName('devices-status');

// SnackBar
const snackbar = () => {
    setTimeout(()=>{
        devicesStatus.classList.add('hide');
    }, 8000) //hide after 8s
}
//Check access permissions
navigator.permissions.query({
    name: 'microphone'
})
.then(function(result){
    console.log("asking for access..")
    if(result.state === 'granted'){
        devicesStatus.innerHTML = "Devices Access Granted."
        snackbar()
    }
 //   if(result.state === 'prompt'){
 //       devicesStatus.innerHTML = "Accept Access."
//        snackbar()
 //   }
    if(result.state === 'denied'){
        devicesStatus.innerHTML = "Please enable Microphone Devices."
        snackbar()
    }

})

//Select buttons
const title = document.querySelector('.title');
const rec = document.querySelector('.rec1');
const stop = document.querySelector('.stop1');
const audioPlay = document.querySelector('.audio');
const stopwatch = document.querySelector('.stopwatch');

//Type of media
let typeOfMedia = {
    audio: true
    // , video: true
}
//Create chunks audio array container
let chunks = [];
//Media options
let options = {
    audioBitsPerSecond: 128000, 
    videoBitsPerSecond: 2500000,
    mimeType: 'audio/webm'
}
// Download counter
let counter = 0;

//RECORDING

//RecStream init
let recStream;

$('.rec1').on("click", function() {
    console.log("audio recording")
});

$('.stop1').on("click", function() {
    console.log("stopped recording")
});
 
 
const recFuntion = async () =>{
    try {
        //Access computer devices
        const mediaDevices = await navigator.mediaDevices.getUserMedia({audio:true});
        if (mediaDevices.active === true){
            //Create a new Media Recording object
            recStream = new MediaRecorder(mediaDevices, options);
            recStream.ondataavailable = e =>{
                //Push inside the array
                chunks.push(e.data);
                //If state is inactive stop recording
                if(recStream.state === 'inactive'){
                    // Create a new Blob
                    let blob = new Blob(chunks, {
                        type: 'audio/webm'
                    });
                    //create a playback
                    createAudioElement(URL.createObjectURL(blob));
                }
            }
             //start rec now
            recStream.start();   
            
        }
    

    } catch(error){
        if (error) throw error;
    }
}