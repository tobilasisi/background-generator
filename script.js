
//var user = {
//	username: "Tobi"
//	Password: "secret"

//};




var database = [
{
	username: "Tobi",
	password: "supersecret"
},

{
	username: "sally",
	password: "123"
},

{
	username: "ingrid",
	password: "777"
}


];
 

var newsFeed = [
{

	username: "Bobby",
	timeline: "so tired from all that teaching"
},
{
	username: "sally",
	timeline: "javascript is so cool"
}

];

function isUserValid (username, password) {
for (var i=0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn (username, password) {
	//console.log (isUserValid (username, password));
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert ("incorrect username or password");
	}

	//if (user === database[0].username && 
		//pass === database[0].password) {
		//console.log(newsFeed);
	//} else {
		//console.log("newsfeed")
		//alert ("incorrect username or password");
	//}
//}

}

var userNamePrompt = prompt("what's your user name?");
var passwordPrompt = prompt("what's your user password?");

signIn (userNamePrompt, passwordPrompt);



