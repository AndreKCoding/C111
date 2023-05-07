//https://teachablemachine.withgoogle.com/models/GwipBMMMs/ Link do Teachable Machine

Webcam.set
({
  width: 350,
  height: 300,
  imageFormat: 'png',
  pngQuality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot()
{
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
  });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GwipBMMMs/model.json', modelLoaded);