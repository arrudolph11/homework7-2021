var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = (video.volume*100)+"%";
	console.log("Current volume: "+video.volume*100+"%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("New Speed= " + video.playbackRate);
	video.playbackRate-=0.05;
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("New Speed= " + video.playbackRaate);
	video.playbackRate+=0.05; 
	// idk if i made this proportional to the slowdown
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Current Location of the video=" + video.currentTime)
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if (video.muted == false){
		video.muted = true
		this.innerHTML = "Unmute"
	}
	else{
			this.innerHTML = "Mute"
			video.muted = false
	}
	console.log(video.muted)
});

document.querySelector("#slider").addEventListener("click", function(){
	var slide = document.getElementById("slider").value;
	video.volume = slide/100;
	document.querySelector("#volume").innerHTML = (video.volume*100)+"%";

});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
