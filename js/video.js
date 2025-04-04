const video = document.querySelector("video")

// Load video on landing
window.addEventListener("load", function () {
	console.log("Good job opening the window");

	// Force disable autoplay
	video.autoplay = false;
	video.pause();
});

// Play video button
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();

	// Load volume
	document.querySelector("#volume").innerHTML = `${slider.value}%`;
})

// Pause video button
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
})

// Slow down button
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slower Video");
	video.playbackRate *= 0.9;
	console.log("New Speed:", video.playbackRate);
})

// Speed up button
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Faster Video");
	video.playbackRate *= 1.1;
	console.log("New Speed:", video.playbackRate);
})

// Skip button
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Video");
	let newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log("Video current time is", video.currentTime);
})

// Mute/Unmute button
document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute Video");
	video.muted = !video.muted;
	document.querySelector("#mute").textContent = video.muted ? 'Unmute' : 'Mute';
})

// Volume Slider
const slider = document.querySelector("#slider");
slider.addEventListener("input", function (event) {
	document.querySelector("#volume").innerHTML = `${event.target.value}%`;
	const newValue = event.target.value / 100;
	video.volume = newValue;
	console.log("The current value is", newValue);
})

// Old school button
document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Go vintage");
	video.classList.add("oldSchool");
})

// Original button
document.querySelector("#orig").addEventListener("click", function () {
	console.log("Revert original");
	video.classList.add("oldSchool");
})