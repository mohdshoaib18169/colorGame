 var num=6;
 var color=generaterandomcolor(num);
// var mysound=new sound("Piano-melancholy-music-short.mp3");
var myAudio = document.createElement("audio");
var square=document.querySelectorAll(".square");
var change=document.getElementById("change");
var msg=document.querySelector("#msg");
var hd=document.querySelector("#hd");
var newcolor=document.querySelector("#newcolor");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var findc=randomclr();
change.textContent=findc;
myAudio.src = "https://www.fesliyanstudios.com/download-link.php?src=i&id=340";

hardbtn.addEventListener("click",function(){
	
	num=6;
	msg.textContent=" ";
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
 color=generaterandomcolor(num);
findc=randomclr();
change.textContent=findc;
newcolor.textContent="New Colors";

for(var i=0;i<square.length;i++){

	square[i].style.background=color[i];
	 square[i].style.display="block";
	}

hd.style.background="steelblue";
//myAudio.play();

});

easybtn.addEventListener("click",function(){
	//myAudio.play();

	num=3;
	msg.textContent=" ";
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
 color=generaterandomcolor(num);
findc=randomclr();
change.textContent=findc;
newcolor.textContent="New Colors";
hd.style.background="steelblue";

for(var i=0;i<square.length;i++){
	if(color[i])
	square[i].style.background=color[i];
else square[i].style.display="none";
	}



});


for(var i=0;i<square.length;i++){
	square[i].style.background=color[i];
	}
	for(var i=0;i<square.length;i++){
		square[i].addEventListener("click",function(){
			var cmp=this.style.background;
			if(cmp === findc){
				myAudio.src="https://audio-previews.elements.envatousercontent.com/files/86554525/preview.mp3";
				myAudio.play();
				//myAudio.src = "https://www.fesliyanstudios.com/download-link.php?src=i&id=340";
				//myAudio.play();
				
				colorchange(cmp);
msg.textContent="Correct !";
hd.style.background=cmp;
newcolor.textContent="Play Again ?";
			}
			else{myAudio.src="https://audio-previews.elements.envatousercontent.com/files/157198722/preview.mp3";
			myAudio.play();

				this.style.background= "black";
				msg.textContent="Try Again !";
			}
		});
	}
	function colorchange(color){
		for(var i=0;i<square.length;i++){
			square[i].style.background=color;
		}
	}
	function randomclr(){
		var rnd=Math.floor(Math.random()*color.length);
		return(color[rnd]);
	}
 function generaterandomcolor(num){
 	var arr = [];
 	for(var i=0;i<num;i++){
 		var r=Math.floor(Math.random()*266);
 		var g=Math.floor(Math.random()*266);
 		var b=Math.floor(Math.random()*266);
 		var j="rgb(" + r + ", " + g + ", " + b + ")";
 		arr.push(j);
 	}
 	return arr;
 }
 newcolor.addEventListener("click",function(){
 	//mysound.play();
 		//myAudio.play();
 	
 	msg.textContent=" ";

 	hardbtn.classList.add("selected");
 	easybtn.classList.remove("selected");

 color=generaterandomcolor(6);
findc=randomclr();
change.textContent=findc;


for(var i=0;i<square.length;i++){
	square[i].style.display="block";
	square[i].style.background=color[i];
	}
	hd.style.background="steelblue";
	newcolor.textContent="New Colors";
});