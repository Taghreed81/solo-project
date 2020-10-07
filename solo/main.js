var name = document.getElementById("name");
var email = document.getElementById("email");
var password= document.getElementById("pass");
// var form= document.getElementById("form");
// var email.addEventListener("textInput", email_Verify);
// var password.addEventListener("textInput", email_Verify);

// form.addEventListener("login", ()=>{
// let messages = [];
// if(name.value === "" || name.value == null) {
// 	messages.push('Name is required')
// }

// if(password.value.length <= 6){
// 	messages.push('Password must be longer than 6 characters')
// }


// })
let persons= [];

function add (){
	if(name.value === '' ){
		alert('Name is required');
	}
	if(email.value.length < 9){
		alert('Please fill up your Email')
	}
	if(password.value.length < 7){
		alert('Please fill up your Password')
	}

}


