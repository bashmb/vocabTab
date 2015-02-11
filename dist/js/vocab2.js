
function vocab(){
	$.get("0.0.0.0:4567", function (data){
		$( ".result").innerHTML
		console.log("hi")
	});

	if (!document.all&&!document.getElementById)
	return

	// get random word
	var random = Math.floor(Math.random()*vocab.length)
	word=document.getElementById? document.getElementById("word"): document.all.word
	definition=document.getElementById? document.getElementById("definition"): document.all.definition
	sentence=document.getElementById? document.getElementById("sentence"): document.all.sentence

	var theWord = vocab[random][0]
	word.innerHTML=theWord
	var theDefinition = vocab[random][1] + " " + vocab[random][2]
	definition.innerHTML=theDefinition
	var theSentence = vocab[random][3]
	sentence.innerHTML = theSentence
	
}
window.onload=vocab

