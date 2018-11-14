// rpg-sphericaldog.js


// core variables
var messages = []; // for a sequence of messages
var answer = null;
var options = [];
var targets = [];
var data = [];
// story function variables
var spin = 0;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Talk to the Dog") {
		sphericalDogLife();
	}
	else if (answer == "Pet the Dog") {
		loseYourHand();
	}
	else if (answer == "Push the Dog") {
		youFeelBad();
	}
}

function parseOptions(data){
	var options = [];
	for (i=0;i<data.length;i++){
		options[i]=data[i].split("|")[0];
	}
	return options;
}

function parseTargets(data){
	var targets = [];
	for (i=0;i<data.length;i++){
		targets[i]=data[i].split("|")[1];
	}
	return targets;
}

function sphericalDog() {
	story("As you travel along a dirt path on a mid-summer day, you see something in the corner of your eye. A spherical dog is rolling about in long, swaying grass. You walk up and confront the dog.\ \nWhat do you do?");
	data = ["Talk to the Dog|l1s2","Pet the Dog|l1s3","Push the Dog|l1s4"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options,targets);
}

function loseYourHand() {
	story("As you reach out your hand the dog rolls towards it and your hand disappears. You scream as the pain hits you. The dog rolls into the forest is gone forever.");
	data = ["Talk to the Dog|l1s2","Push the Dog|l1s4","[undefined]|l0s0"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

function youFeelBad() {
	story("The dog is heavy, but you push it down a hill using all of your weight. The dog is now upside-down and you feel bad.");
	data = ["Talk to the Dog|l1s2","Pet the Dog|l1s5","[undefined]|l0s0"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

function sphericalDogLife(){  // FIRST SCENE - WELCOMES PLAYER
	story("The dog tells you about the Land of Spheres where all plants and animals are spherical. It informs you that spherical dogs are in danger and it needs your help to save them. What do you tell the dog?");
	data = ["[undefined]|l1s5","[undefined]|l1s6","[undefined]|l1s7"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}
