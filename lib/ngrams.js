var _ = require("lodash");
var split= require('./splitwords')

module.exports={
    ngram : function ngrams(s,ngrams,filterShort){
	
	s=s || "this is a sample string";
	ngrams = ngrams || 2;
	filterShort= filterShort || true;
	 
	 //get all words in string
	var words = split.split_words(s);
	var tokens =[];

	for(var i=0; i< ngrams; i++){
		//console.log(i)
	 	tokens=_.union( tokens, _.chunk(_.slice(words,i),ngrams) )
	}

	//filter short tokens
	if(filterShort){
		tokens=_.filter(tokens, function(val){
			return (val.length==ngrams)
		});
	}

	return tokens
}
}