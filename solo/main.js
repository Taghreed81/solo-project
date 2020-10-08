var name = document.getElementById("name");
var email = document.getElementById("email");
var password= document.getElementById("pass");


let persons= [];

function add (){

	// let person = {
	// 	name = name.value,
	// 	email = email.value,
	// 	password = password.value
	// }
	// check if the input name is empty, send this alert.
	if(name.value === '' ){
		alert('Name is required');
		// persons.push(name);
	 }
	// check if the input email is less than 9 charecters, send this alert.
    if(email.value.length < 9){
		alert('Please fill up your Email')
		// persons.push(email);
	 }
	//  check if the input password is less than 7 charecters, send this alert.
    if(password.value.length < 7){
		alert('Please fill up your Password')
		// persons.push(password);
	 }
	
}
