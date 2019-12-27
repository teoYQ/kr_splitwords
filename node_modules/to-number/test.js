
var toN = require ( './index' )

var strs=[
	"two thousand and twelve",
	'forty four',
	'twenty two hundreds'
]


strs.forEach(function(str){

	var parsed=toN(str)

	console.log(str+' >> '+parsed);	
})
