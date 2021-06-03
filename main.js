var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function start()
{
    document.getElementById("ta").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function run (event) {

    console.log(event);

    var Content  = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("ta").innerHTML = Content ;
    speak();
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("ta").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90
  });
 camera = document.getElementById("webcame");