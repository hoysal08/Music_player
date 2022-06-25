
let songindex=1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songitem'))
let songinfoele=document.getElementById('mpsongname')
let songs=[
    { songName: "What You Need",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"}, //what you nedd
    { songName: "Hardest To Love",filePath:"songs/2.mp3",coverPath:"covers/2.jfif"},//hardest to love
    { songName: "Die For You",filePath:"songs/3.mp3",coverPath:"covers/3.jfif"},//die for you*
    { songName: "High For This",filePath:"songs/4.mp3",coverPath:"covers/4.jfif"},//high for this*
    { songName: "Moth To A Flame",filePath:"songs/5.mp3",coverPath:"covers/5.jfif"},//moth to flame
    { songName: "Reminder",filePath:"songs/6.mp3",coverPath:"covers/3.jfif"},//reminder
    { songName: "Down Low",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},//down low
    { songName: "Call Out My Name",filePath:"songs/8.mp3",coverPath:"covers/8.jfif"},//call out my name
    { songName: "Widow",filePath:"songs/9.mp3",coverPath:"covers/9.jfif"},//widow

]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songName;
    /*let durationele=new Audio(songs[i].filePath)
   
    if(isNaN(durationele.duration))
    {
        element.getElementsByClassName("timestamp")[0].innerHTML=" ";

    }
    else
    {
    element.getElementsByClassName("timestamp")[0].innerHTML=(durationele.duration);
    }
    */
    

});

 //handle play/pause click
 masterPlay.addEventListener('click',function (){
     if(audioElement.paused || audioElement.currentTime<=0)
     {
        audioElement.play();
        chngmainplayername();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        playlistele=document.getElementById(`${songindex}`);
        playlistele.classList.remove('fa-play-circle');
        playlistele.classList.add('fa-pause-circle')
        gif.style.opacity=1;
     }
     else
     {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
        playlistele=document.getElementById(`${songindex}`);
        playlistele.classList.add('fa-play-circle');
        playlistele.classList.remove('fa-pause-circle')


     }
 })
//listen to Event

audioElement.addEventListener('timeupdate',function (){
    //console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',function (){
    audioElement.currentTime=((myprogressbar.value * audioElement.duration) /100)
})

 function makeAllPlays()
 {  
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e)=>
    {
         e.classList.remove('fa-pause-circle');
         e.classList.add('fa-play-circle');
         audioElement.pause();
         gif.style.opacity=0;

    })

 }

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>
  { 
     
    makeAllPlays();
    songindex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songindex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    chngmainplayername();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

  })
})

prevele=document.getElementById('previous');
prevele.addEventListener('click',function (){
    playlistele=document.getElementById(`${songindex}`);
    playlistele.classList.add('fa-play-circle');
    playlistele.classList.remove('fa-pause-circle')
    if(songindex<=1)
    {
        songindex=9;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    chngmainplayername();
    gif.style.opacity=1;
    playlistele=document.getElementById(`${songindex}`);
    playlistele.classList.remove('fa-play-circle');
    playlistele.classList.add('fa-pause-circle')
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })

fowardele=document.getElementById('forward')
  fowardele.addEventListener('click',function (){
    playlistele=document.getElementById(`${songindex}`);
    playlistele.classList.add('fa-play-circle');
    playlistele.classList.remove('fa-pause-circle')
    if(songindex>=9)
    {
        songindex=1;
    }
    else{
           songindex+=1;
    }
    audioElement.src=`songs/${songindex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    chngmainplayername();
    gif.style.opacity=1;
    playlistele=document.getElementById(`${songindex}`);
    playlistele.classList.remove('fa-play-circle');
    playlistele.classList.add('fa-pause-circle')
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })

 function chngmainplayername()
  {
      songinfoele.innerHTML=songs[songindex-1].songName;
  }



  //add pause func in songlist
  //add icon in title