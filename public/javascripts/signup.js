function popUp() {
    var popup = document.getElementById('popupData');
    popup.classList.toggle("show");

    var inf = popup.value
    const user = inf;

    let text;
    let info = prompt("Do you want to see your info?","");
    
    var signup = {"firstname":"tiger", "lastname":"woods", "email":"abc@abc.ca", "password":"this is password"}
    var signupString = JSON.stringify(signup)

    var signupObject = JSON.parse(signupString)

    var newString = JSON.stringify(signupObject)

    if(info == null || info == "") {
        text = "No information added";
    } else {
        text = newString;
    }
    document.getElementById('popupData').innerHTML = text;





}
