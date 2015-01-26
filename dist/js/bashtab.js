// Bashtab Extension Event Page


function clock(){
	var Digital=new Date()
	if (!document.all&&!document.getElementById)
	return
	timeElement=document.getElementById? document.getElementById("timeDisplay"): document.all.timeDisplay
	dateElement=document.getElementById? document.getElementById("dateDisplay"): document.all.dateDisplay
	var hours=Digital.getHours()
	var minutes=Digital.getMinutes()
	var day=Digital.getDay()
	var date=Digital.getDate()
	var month=Digital.getMonth()
	var year = 1900 + Digital.getYear()
	console.log(year)
	var dn="PM"
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	if (hours<12)
		dn="AM"
	if (hours>12)
		hours=hours-12
	if (hours==0)
		hours=12
	if (minutes<=9)
		minutes="0"+minutes
	var ctime=hours+":"+minutes+" "+dn
	timeElement.innerHTML=ctime
	var dayDisplay = days[day] + " " + months[month] + " " + date + ", " + year
	dateElement.innerHTML=dayDisplay
	setTimeout(function(){clock()},1000)
	
}
window.onload=clock



// Things to add:  Todo List?  