
	var a = chrome.storage.sync.get('userName', function(obj) {
		console.log(obj['userName'])
		var name = obj['userName']
		
		namespot=document.getElementById? document.getElementById("name"): document.all.namespot

			var theName = name
			namespot.innerHTML="hello, " + theName + ' <i class="glyphicon glyphicon-wrench"></i>'

		
	})
