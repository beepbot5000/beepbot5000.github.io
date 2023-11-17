onEvent("24btn", "click", function() {
  setScreen("correct1");
});
onEvent("16", "click", function( ) {
  playSound("assets/default.mp3");
	setScreen("incorrect");
});

onEvent("incorrect", "click", function( ) {
	setScreen("startScreen");
});

onEvent("start", "click", function( ) {
	setScreen("question1");
});

onEvent("next1", "click", function( ) {
	setScreen("question2");
});

onEvent("27true", "click", function() {
  setScreen("endScreen");
});
onEvent("18false", "click", function( ) {
	setScreen("incorrect");
});

onEvent("replay", "click", function( ) {
	setScreen("startScreen");
});
