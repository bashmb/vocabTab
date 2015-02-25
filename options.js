$('input[name="background-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
  console.log(this); // DOM element

});

$('.save').click(function () {
	console.log($('#userName').val())
	var newName = $('#userName').val()
	if (newName){
		chrome.storage.sync.set({'userName': newName})
	}
	 }
)

var getStorage = function(){
	console.log('getStorage')

	var data = chrome.storage.sync.get(function(obj){
		return obj
	})
	return data
}

$('.getStuff').click($('.stuff').html(function(e){
	e.preventDefault;
	return 2+2}))


// $('.getStuff').click(function() {
// 	chrome.storage.sync.get(function(obj){console.log(obj)})
// 	})