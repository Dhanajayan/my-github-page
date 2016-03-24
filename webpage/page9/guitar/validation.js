function validate() {
	// assigning form value to variable
	var user = hello.username.value;
	var password = hello.password.value;
	var flag=0;

	//check whether value is correct or not

	if(user.charAt(0) == "") {
		alert("Username should not be empty");
		flag=1;
	} else if(password.charAt(0) == "") {
		alert("Password should not be empty");
		flag=1;
	} 

	//if value is valid display success alert or error alert

	if(flag == 0) {
		alert("Login successfully");
	} else {
		alert("invalid user name or password");
	}
	flag =0;
}