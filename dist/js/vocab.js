
function vocab(){
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




// Things to add:  Todo List?  


vocab = 
[
	['abate','v.','(of something perceived as hostile, threatening, or negative) become less intense or widespread.','My fear of the exam abated the more I studied and the better my practice quizzes went.'],
	['abscond','v.','leave hurriedly and secretly, typically to avoid detection of or arrest for an unlawful action such as theft.','The thief absconded with the prized jewels before the guards even noticed she was there.'],
	['abstain','v.','restrain oneself from doing or enjoying something.','Although I love chocolate, my doctor says I should try hard to abstain from eating it all day every day.'],
	['abyss','n.','a deep or seemingly bottomless chasm.','Wile E. Coyote fell into another abyss... and somehow he survived.'],
	['adulterate','v.','render (something) poorer in quality by adding another substance, typically an inferior one.','Don\'t adulterate my coffee with your "sugar" and your "milk"'],
	['advocate','n.','a person who publicly supports or recommends a particular cause or policy.','As an advocate of human rights, I reject slavery in any form.'],
	['aesthetic','adj.','concerned with beauty or the appreciation of beauty.',''],
	['aggrandize','v.','increase the power, status, or wealth of.','My advanced degree aggrandized my role in society.'],
	['ambivalent','adj.','having mixed feelings or contradictory ideas about something or someone.','Jim felt ambivalent regarding the presidential race; although he cared deeply, he saw good and bad in each candidate.'],
	['anomaly','n.','something that deviates from what is standard, normal, or expected.','Unfortunately, Suzan\'s perfect score on the first exam proved to be an anomaly this semester.']
]