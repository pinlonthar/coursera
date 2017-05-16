
(function(window){
	var byeSpeaker ={};
	window.byeSpeaker = byeSpeaker;
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

})(window);
var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}

