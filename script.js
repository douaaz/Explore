
let  largebox= document.querySelector('#largebox');
largebox.style.display='none'
let openbutton= document.querySelector('#openbutton');
let dtbox= document.querySelector('#dtbox');
dtbox.style.display='none'
let opendtbutton= document.querySelector('#opendtbutton');

function before() {
 document.getElementById('pic1')
  .src='https://voguishcar.com/wp-content/uploads/2020/02/La-mosquee-Hassan-II.jpg';
}
function after(){
  document.getElementById('pic1')
  .src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2857650.jpg';
}
function dtbefore() {
  document.getElementById('dtpic1')
  .src='https://i.pinimg.com/564x/40/7a/6b/407a6b1125aac294c7f84f1434f6678a.jpg'
}
function dtafter() {
  document.getElementById('dtpic1')
  .src='https://i.pinimg.com/564x/3f/dd/75/3fdd7504ee82fba5fc53249b9532cd99.jpg'
}
function closebox() {
 largebox.style.display='none'
 openbutton.style.display='inline'
 opendtbutton.style.display='inline'

}
function closedtbox() {
 dtbox.style.display='none'
 opendtbutton.style.display='inline'
 openbutton.style.display='inline'

}
function openbox() {
 largebox.style.display='inline'
  openbutton.style.display='none'
  opendtbutton.style.display='none'
}
function opendtbox() {
  dtbox.style.display='inline'
  opendtbutton.style.display='none'
  openbutton.style.display='none'
}


var song=document.getElementById('song');
var icon=document.getElementById('picplay');
icon.onclick = function() {
  if (song.paused){
    song.play();
    icon.src = "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26341460.jpg"
  } else{
    song.pause();
    icon.src="https://ak.picdn.net/shutterstock/videos/1022031049/thumb/1.jpg"
  }
}
