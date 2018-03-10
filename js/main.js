// Mediaelementplayer features: 

$('video').mediaelementplayer({
    features: ['playpause', 'current' , 'progress' , 'duration', 'volume', 'fullscreen', 'skipback'],
    skipBackInterval: 5
  });

// parts of the text will highlight when pronounced on the audio

const video = document.querySelector('video');
let span = document.querySelectorAll('.captions span');

video.addEventListener("timeupdate",()=>{
    for(let i=0; i<span.length; i++){
        let dataStart =span[i].getAttribute('data-start');
        let dataEnd = span[i].getAttribute('data-end');
        let currentTime = video.currentTime;

        if(currentTime > dataStart && currentTime < dataEnd){
             span[i].style.color= 'orange';
        } else {
            span[i].style.color='black';
        }
    }
});

// exceed expectations: when clicking on any sentence, video player jumps to that sentence

for( let i = 0; i<span.length; i++){
span[i].addEventListener('click', (e)=>{
  video.currentTime = e.target.getAttribute('data-start');
  video.play();
});
}
