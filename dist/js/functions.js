
function clock(){
	var Digital=new Date()
	if (!document.all&&!document.getElementById)
	return
	word=document.getElementById? document.getElementById("word"): document.all.word
	definition=document.getElementById? document.getElementById("definition"): document.all.definition
	
	var ctime=hours+":"+minutes+" "+dn
	timeElement.innerHTML=ctime
	var dayDisplay = days[day] + " " + months[month] + " " + date + ", " + year
	dateElement.innerHTML=dayDisplay
	setTimeout(function(){clock()},1000)
	
}
window.onload=clock




// Things to add:  Todo List?  