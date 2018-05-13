console.log("starting notes.js");

module.exports.add = function(a,b){
	let result = a+b;
	return result;
}
module.exports.addNote = function () {
	console.log("addNote");
	return "New Note";
}


