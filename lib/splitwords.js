
module.exports= {
	split_words : function (string,stopwords){
	stopwords=stopwords || []

	var words=[],
		stopWordsPat=/^$/;

	//remove stopwords
	if(stopwords.constructor === Array && stopwords.length){
		stopWordsPat=new RegExp( '\\b('+ stopwords.join('|') +')\\b','i');
	}

	string.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '') //remove whitespace
			 .replace(/(^\s*|\s*$)/g, '')	//remove trailing whitespace		 
			 .split(' ')
			 .forEach(function(word){

			 	
			 	word=word
			 			.replace(/[\.\?!]$/,'')//remove some ending puncts
			 			.replace(/([a-z])([A-Z])/g, '$1' + ' ' + '$2') //decamelize
			 			.replace(/([^a-zA-Z0-9])([a-zA-Z])/g, '$1' + ' ' + '$2') //decamelize on non letters
			 			.replace(/([a-zA-Z])([^a-zA-Z0-9])/g, '$1' + ' ' + '$2') //decamelize on non letters
			 			.replace(/_/g,' ')//replace underscores
			 			.split(' ') //add all the words
			 			.forEach(function(w){
			 				// w='this';
			 				if(!stopWordsPat.test(w) && w.length){
			 					words.push(w);
			 				}				 				
			 			});

			 });

	// console.log(words)
	return words;

}
}
var b = require("./splitwords")
console.log(b.split_words("deind idewid    mdamsdok",""))
