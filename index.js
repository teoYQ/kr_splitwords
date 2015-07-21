
var S = require('string');

module.exports=function(string,stopwords){
	stopwords=stopwords || []

	var words=[],
		stopWordsPat=/^$/;

	//remove stopwords
	if(stopwords.constructor === Array && stopwords.length){
		stopWordsPat=new RegExp( '('+ stopwords.join('|') +')','i');
	}

	S(string) 
			 .collapseWhitespace() //remove puncts
			 .trim()							 
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