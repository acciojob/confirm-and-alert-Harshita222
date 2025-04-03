//your JS code here. If required.
function askConfirm(){
	var response =  window.confirm("Do you want to proceed?”);
		if (response == true) {
			window.alert("You  clicked OK. Proceeding...")	;			
		} else{
      window.alert("You clicked Cancel. Exiting...");
		}
}

askConfirm()