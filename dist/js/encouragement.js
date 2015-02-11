
function encouragement(){
	if (!document.all&&!document.getElementById)
	return

	// get random encouragement
	var random = Math.floor(Math.random()*encouragement.length)
	niceWords=document.getElementById? document.getElementById("niceWords"): document.all.niceWords
	

	var theNiceWords = encouragement[random][0]
	niceWords.innerHTML=theNiceWords
	
	
}
window.onload=encouragement

encouragement = [

	['You\'re looking great today.'],
	['Here, smarty pants.  Learn another word.'],
	['Every day another dollar.'],
	['This will pay off, I promise.'],
	['Everybody likes seeing a smile.'],
	['Good, you\'re back.'],
	['How are you doing?'],
	['How are thigngs?'],
	['Oooh, another new tab?'],
	['Alright, another word for you.'],
	['I know you already know this one, but...'],
	['Did you hear the one about... nevermind all I know are big words.  Vocabulary is no joke.'],
	['What\'s the best thing youv\'e done today?'],
	['Who are you becoming?'],
	['There is always a better way'],
	['Keep it up!'],
	['Ah, you\'re back.  Perfect.'],
	['Great work'],
	['Don\'t stop til the job is done!'],
	['This word will help you.'],
	['Do you know this one?  You will soon.'],
	['Did you know 82% of statistics are made up?'],
	['How\'s your vocabulary coming along?'],
	['Try to use this one in conversation today.'],
	['This word will potentially scare off your date.  It depends on what you just ate.'],
	['Juneau the capitol of Alaska?'],
	['Keep on keepin on'],
	['This word is your destiny.  Maybe?'],
	['When is the last time you said this word out loud?'],
	['I bet your mom knows this word'],
	['Is it hot in here or is it just me?'],
	['Here.  This one is on me.'],
	['Who doesn\'t like a good word?'],
	['There is something magical about a perfectly chosen word.  Try this one.'],
	['You can do this.'],
	['You make this look good.'],
	['Party like it\'s 1699'],
	['Want to hang out sometime?']
]