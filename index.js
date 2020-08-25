const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

const dayToDayTalks = [
    'I am good , Thank you',
    'Nothing Special',
    'Everything is good'
];

recognition.onstart = function() { 
    console.log('Speech recognition service has started'); 
  };


  recognition.onresult = function(event) {
    const current = event.resultIndex;

    const voice = event.results[current][0].transcript;

    content.textContent = voice;

    voiceBack(voice);
};


btn.addEventListener('click', ()=>{
    recognition.start();
});


function voiceBack(value){
    const synth = window.speechSynthesis;
    const speech = new SpeechSynthesisUtterance(); 

    if(value.includes('how are you')){
        const finalVoice = dayToDayTalks[Math.floor(Math.random() * dayToDayTalks.length)];
      speech.text = finalVoice;
    }
    else{
        speech.text = value;
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    synth.speak(speech);
    
}
