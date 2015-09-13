$('input[name="background-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
  console.log(this); // DOM element

});

$('.save').click(function () {
	console.log($('#userName').val())
	var newName = $('#userName').val()
	if (newName){
		chrome.storage.sync.set({'userName': newName})
	}
	window.location='vocabTab.html'
	}
)



var getStorage = function(){
	console.log('getStorage')

	var data = chrome.storage.sync.get(function(obj){
		return obj
	})
	console.log(data)
	return data
}

$('.getStuff').click(function() {
	getStorage()
})


// $('.getStuff').click(function() {
// 	chrome.storage.sync.get(function(obj){console.log(obj)})
// 	})

var a = chrome.storage.sync.get('userName', function(obj) {

	var name = obj['userName']
	
	namespot=document.getElementById? document.getElementById("name"): document.all.namespot

		var theName = name
		$('#userName').attr("placeholder",theName);
	
		
})


console.log("This loaded");