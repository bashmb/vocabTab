$('input[name="background-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
  console.log(this); // DOM element

});

$('.save').click(function () {
	console.log($('#userName').val())
	var newName = $('#userName').val()
	if (newName){
		chrome.storage.sync.set({'userName': newName})
	}
	var backCheck = $('#background-checkbox')
	if (backCheck === true){
		chrome.storage.sync.set({'backCheck': true})
	} else {
		chrome.storage.sync.set({'backCheck': 'zebra'})
	}
	window.location='options.html'
	return 
	}
)

var getStorage = function(){
	var data = chrome.storage.sync.get(function(obj){
		return obj
	})
	console.log(data)
	return data['userName']
}

$('.getStuff').click(function() {
	var stuff = chrome.storage.sync.get( function(obj){
		console.log(obj)
	})
	$('#bigTitle').text($('#titleIt').val())
})


// $('.getStuff').click(function() {
// 	chrome.storage.sync.get(function(obj){console.log(obj)})
// 	})

var a = chrome.storage.sync.get('userName', function(obj) {
	$('#userName').attr("placeholder",obj['userName']);		
})


var b = chrome.storage.sync.get('backCheck', function(obj) {
	$('#background-checkbox').attr(obj['backCheck']);		
})