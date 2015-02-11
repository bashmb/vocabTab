
function vocab(){
	if (!document.all&&!document.getElementById)
	return

	// get random word
	var random = Math.floor(Math.random()*vocab.length)
	var randomEnc = Math.floor(Math.random()*encouragement.length)
	niceWords=document.getElementById? document.getElementById("niceWords"): document.all.niceWords
	word=document.getElementById? document.getElementById("word"): document.all.word
	definition=document.getElementById? document.getElementById("definition"): document.all.definition
	sentence=document.getElementById? document.getElementById("sentence"): document.all.sentence

	var theWord = vocab[random][0]
	word.innerHTML=theWord
	var theDefinition = vocab[random][1] + " " + vocab[random][2]
	definition.innerHTML=theDefinition
	var theSentence = vocab[random][3]
	sentence.innerHTML = theSentence
	var theNiceWords = encouragement[randomEnc]
	niceWords.innerHTML = "<b>"+theNiceWords+"</b>"
	
}
window.onload=vocab




// Things to add:  Todo List?  


vocab = [

	['abate','v.','(of something perceived as hostile, threatening, or negative) become less intense or widespread.','My fear of the exam abated the more I studied and the better my practice quizzes went.'],
	['abscond','v.','leave hurriedly and secretly, typically to avoid detection of or arrest for an unlawful action such as theft.','The thief absconded with the prized jewels before the guards even noticed she was there.'],
	['abstain','v.','restrain oneself from doing or enjoying something.','Although I love chocolate, my doctor says I should try hard to abstain from eating it all day every day.'],
	['abyss','n.','a deep or seemingly bottomless chasm.','Wile E. Coyote fell into another abyss... and somehow he survived.'],
	['adulterate','v.','render (something) poorer in quality by adding another substance, typically an inferior one.','Don\'t adulterate my coffee with your \"sugar\" and your \"milk\"'],
	['advocate','n.','a person who publicly supports or recommends a particular cause or policy.','As an advocate of human rights, I reject slavery in any form.'],
	['aesthetic','adj.','concerned with beauty or the appreciation of beauty.',''],
	['aggrandize','v.','increase the power, status, or wealth of.','My advanced degree aggrandized my role in society.'],
	['ambivalent','adj.','having mixed feelings or contradictory ideas about something or someone.','Jim felt ambivalent regarding the presidential race; although he cared deeply, he saw good and bad in each candidate.'],
	['anomaly','n.','something that deviates from what is standard, normal, or expected.','Unfortunately, Suzan\'s perfect score on the first exam proved to be an anomaly this semester.'],
	['antipathy','n.','a deep-seated feeling of dislike; aversion.',''],
	['apathy','n.','lack of interest, enthusiasm, or concern.',''],
	['arch','adj.','deliberately or affectedly playful and teasing.',''],
	['assuage','v.','make (an unpleasant feeling) less intense.','The teacher was able to assuage parents\' fears about drastic curriculum changes.'],
	['audacious','adj.','showing a willingness to take surprisingly bold risks.','Quitting work to go to graduate school is condsidered a wonderfully audacious move by many.'],
	['auspicious','adj.','conducive to success; favorable.',''],
	['belligerent','adj.','hostile and aggressive.','The drunk man grew belligerent after someone stole his shoes.'],
	['bolster','v.','support or strengthen; prop up.','Adding extra beams and replacing the previous hardware helped to bolster the treehouse.'],
	['cacophony','n.','a harsh, discordant mixture of sounds.','The crowd erupted in cacophony at the speaker\'s contraversial claims.'],
	['capricious','adj.','given to sudden and unaccountable changes of mood or behavior.','He was known to be capricious; it was difficult to predict how he would react to the news.'],
	['cavalier','adj.','showing a lack of proper concern; offhand.','His cavalier attitude was probably a way to avoid becoming overly stressed about all the changes in his life.'],
	['corroborate','v.','confirm or give support to (a statement, theory, or finding).','The photographic evidence corroborated his claim of innocence and he walked free.'],
	['deride','v.','express contempt for; ridicule.',''],
	['desideratum','n.','anything that is highly desired',''],
	['dissonance','n.','lack of harmony among musical notes.',''],
	['enervate','v.','cause (someone) to feel drained of energy or vitality; weaken.',''],
	['engender','v.','cause or give rise to (a feeling, situation, or condition).',''],
	['enigma','n.','a person or thing that is mysterious, puzzling, or difficult to understand.',''],
	['ephemeral','adj.','lasting for a very short time.',''],
	['equivocal','adj.','open to more than one interpretation; ambiguous.',''],
	['erudite','adj.','having or showing great knowledge or learning.',''],
	['esoteric','adj.','intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.',''],
	['eulogy','n.','a speech or piece of writing that praises someone or something highly, typically someone who has just died.',''],
	['extant','adj.','(especially of a document) still in existence; surviving.',''],
	['fastidious','adj.','very attentive to and concerned about accuracy and detail.',''],
	['fervid','adj.','intensely enthusiastic or passionate, especially to an excessive degree.',''],
	['garrulous','adj.','excessively talkative, especially on trivial matters.',''],
	['gullible','adj.','easily persuaded to believe something; credulous.',''],
	['homogenous','adj.','of the same kind; alike.',''],
	['inculpate','v.','incriminate.',''],
	['ingenuous','adj.','(of a person) clever, original, and inventive.',''],
	['laconic','adj.','(of a person, speech, or style of writing) using very few words.',''],
	['laudable','adj.','(of an action, idea, or goal) deserving praise and commendation.',''],
	['lethargic','adj.','affected by lethargy; sluggish and apathetic.',''],
	['loquacious','adj.','tending to talk a great deal; talkative.',''],
	['lucid','adj.','expressed clearly; easy to understand.',''],
	['magnanimous','adj.','very generous or forgiving, especially toward a rival or someone less powerful than oneself.',''],
	['malleable','adj.','easily influenced; pliable.',''],
	['mawkish','adj.','sentimental in a feeble or sickly way.',''],
	['mellifluous','adj.','(of a voice or words) sweet or musical; pleasant to hear.',''],
	['mercurial','adj.','(of a person) subject to sudden or unpredictable changes of mood or mind.',''],
	['misanthrope','n.','a person who dislikes humankind and avoids human society.',''],
	['mitigate','v.','make less severe, serious, or painful.',''],
	['mordant','adj.','(especially of humor) having or showing a sharp or critical quality; biting.',''],
	['obdurate','adj.','stubbornly refusing to change one\'s opinion or course of action.',''],
	['objurgate','v.','rebuke severely; scold.',''],
	['opaque','adj.','not able to be seen through; not transparent.',''],
	['ostentation','n.','pretentious and vulgar display, especially of wealth and luxury, intended to impress or attract notice.',''],
	['paradox','n.','a statement or proposition that, despite sound (or apparently sound) reasoning from acceptable premises, leads to a conclusion that seems senseless, logically unacceptable, or self-contradictory.',''],
	['pedant','n.','a person who is excessively concerned with minor details and rules or with displaying academic learning.',''],
	['philanthropic','adj.','(of a person or organization) seeking to promote the welfare of others, especially by donating money to good causes; generous and benevolent.',''],
	['placate','v.','make (someone) less angry or hostile.',''],
	['pragmatic','adj.','dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.',''],
	['precipitate','v.','cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely.',''],
	['prevaricate','v.','speak or act in an evasive way.',''],
	['prodigal','adj.','spending money or resources freely and recklessly; wastefully extravagant.',''],
	['prolific','adj.','(of a plant, animal, or person) producing much fruit or foliage or many offspring.',''],
	['property','n.','a thing or things belonging to someone; possessions collectively.',''],
	['prurient','adj.','preoccupied with perverse details',''],
	['reticent','adj.','not revealing one\'s thoughts or feelings readily.',''],
	['sanguine','adj.','optimistic or positive, especially in an apparently bad or difficult situation.',''],
	['solipsistic','adj.','totally and utterly self-absorbed',''],
	['soporific','adj.','tending to induce drowsiness or sleep.',''],
	['untrammeled','adj.','unrestrained',''],
	['vacillate','v.','alternate or waver between different opinions or actions; be indecisive.',''],
	['venerate','v.','regard with great respect; revere.',''],
	['volatile','adj.','liable to change rapidly and unpredictably, especially for the worse.',''],
	['waver','v.','shake with a quivering motion.',''],
	['zeal','n.','great energy or enthusiasm in pursuit of a cause or an objective.','']
]



encouragement = [

	['You\'re looking great today.'],
	['Here, smarty pants.  Learn another word.'],
	['Every day another dollar.'],
	['This will pay off, I promise.'],
	['Everybody likes seeing a smile.'],
	['Good, you\'re back.'],
	['How are you doing?'],
	['How are things?'],
	['Oooh, another new tab?'],
	['Alright, another word here for you.'],
	['I know you already know this one, but...'],
	['Did you hear the one about... nevermind. All I know in the world are big words.  Vocabulary is no joke.'],
	['What\'s the greatest thing you\'ve already done today?'],
	['Who are you becoming?'],
	['There is always another way'],
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
	['Keep on keepin\' on.'],
	['This word is your destiny.  Maybe?'],
	['When was the last time you said this word out loud?'],
	['I bet your mom knows this word.'],
	['Is it hot in here or is it just me?'],
	['Here.  This one is on me.'],
	['Who doesn\'t like a good word?'],
	['There is something magical about a perfectly chosen word.  Try this one.'],
	['You can do this.'],
	['You make this look good.'],
	['Party like it\'s 1699'],
	['Want to hang out sometime?']
]