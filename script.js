function askConfirm() {
    var response = window.confirm("Do you want to proceed?");
    if (response) {
        window.alert("You clicked OK. Proceeding...");
        return true;
    } else {
        window.alert("You clicked Cancel. Exiting...");
        return false;
    }
}
