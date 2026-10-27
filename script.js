message = "253-Mathilde G.- Portfolio ";
function step() {
message = message.substr(1) + message.substr(0,1);
document.title = message.substr(0,15);
}

const contact = document.getElementById("contact");
if (contact) {
    contact.addEventListener("click", function() {
        window.location.assign("https://253-mathilde.github.io/My-portfolio/undersites/contact");
    });
}

const projects = document.getElementById("projects");
if (projects) {
    projects.addEventListener("click", function() {
        window.location.assign("https://253-mathilde.github.io/My-portfolio/undersites/projects");
    });
}

const education = document.getElementById("education");
if (education) {
    education.addEventListener("click", function() {
        window.location.assign("https://253-mathilde.github.io/My-portfolio/undersites/education");
    });
}

const cd = document.getElementById("disk");
const music = document.getElementById("audio");
cd.addEventListener("click", function() {
  if (music.paused) {
    console.log("Versuche Musik abzuspielen...");
    music.play();
  } else {
    music.pause();
  }
});

let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

const taschenlampe = document.getElementById("taschenlampe");
const flashlightDiv = document.getElementById("flashlight");

taschenlampe.addEventListener("click", function(){
  if (flashlightDiv.style.display === "block") {
    flashlightDiv.style.display = "none";
  } else {
    flashlightDiv.style.display = "block";
  }
});


window.addEventListener("keydown", (event) => {
 if (event.key === 'l' || event.key === 'L') {
   if (flashlightDiv.style.display === "block") {
    flashlightDiv.style.display = "none";
  } else {
    flashlightDiv.style.display = "block";
  }
  }
});





var colours=new Array("#178567", "#053029", "#3A6A64", "#122F33", "#03140E"); // colours for top, right, bottom and left borders and background of bubbles
var bubbles=49; // maximum number of bubbles on screen
var over_or_under="under"; // set to "over" for bubbles to always be on top, or "under" to allow them to float behind other objects

/****************************
* JavaScript Bubble Cursor  *
*(c)2010-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=1000;
var shigh=800;
var sleft=sdown=0;
var bubb=new Array();
var bubbx=new Array();
var bubby=new Array();
var bubbs=new Array();
var sploosh=false;

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(buble);

function buble() { 
  if (document.getElementById) { 
  if (document.querySelector(".bubble-cursor-generated")) return; 

    var i, rats, div;
    for (i=0; i<bubbles; i++) {
    rats=createDiv("1px", "1px");
    rats.classList.add("bubble-cursor-generated");
    rats.style.visibility="hidden";
    rats.style.zIndex=(over_or_under=="over")?"1001":"0";

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.top="1px";
    div.left="0px";
    div.bottom="1px";
    div.right="0px";
    div.borderLeft="1px solid "+colours[3];
    div.borderRight="1px solid "+colours[1];

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.top="0px";
    div.left="1px";
    div.right="1px";
    div.bottom="0px"
    div.borderTop="1px solid "+colours[0];
    div.borderBottom="1px solid "+colours[2];

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.left="1px";
    div.right="1px";
    div.bottom="1px";
    div.top="1px";
    div.backgroundColor=colours[4];
    if (navigator.appName=="Microsoft Internet Explorer") div.filter="alpha(opacity=50)";
    else div.opacity=0.5;
    document.body.appendChild(rats);
      bubb[i]=rats.style;
    }
    set_scroll();
    set_width();
    bubble();
  }
}

function bubble() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<bubbles; c++) if (!bubby[c]) {
      bubb[c].left=(bubbx[c]=x+30)+"px";
      bubb[c].top=(bubby[c]=y+20)+"px";
      bubb[c].width="2px";
      bubb[c].height="2px"
      bubb[c].visibility="visible";
      bubbs[c]=3;
      break;
    }
  }
  for (c=0; c<bubbles; c++) if (bubby[c]) update_bubb(c);
  setTimeout("bubble()", 40);
}

document.onmousedown=splash;
document.onmouseup=function(){clearTimeout(sploosh);};

function splash() {
  ox=-1;
  oy=-1;
  sploosh=setTimeout('splash()', 100);
}

function update_bubb(i) {
  if (bubby[i]) {
    bubby[i]-=bubbs[i]/2+i%2;
    bubbx[i]+=(i%5-2)/5;
    if (bubby[i]>sdown && bubbx[i]>sleft && bubbx[i]<sleft+swide+bubbs[i]) {
	  if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<4) {
		bubb[i].width=bubbs[i]+"px";
		bubb[i].height=bubbs[i]+"px";
	  }
      bubb[i].top=bubby[i]+"px";
      bubb[i].left=bubbx[i]+"px";
    }
    else {
      bubb[i].visibility="hidden";
      bubby[i]=0;
      return;
    }
  }
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}
