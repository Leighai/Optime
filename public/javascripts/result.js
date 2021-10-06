
window.onload = function() {
    class Habit {
        constructor(
            email,
            password,
            category,
            title,
            detail,
            commitment
        ) {
            this.email = email;
            this.password = password;
            this.category = category;
            this.title = title;
            this.detail = detail;
            this.commitment = commitment;
        }
    }

    var User = new Habit("123@as.ca","1234","health",'hydrate',"drink water","8");
    console.log(User);
    document.getElementById('test').innerHTML = User.title;

    function MyFunction(){
        if(document.getElementById('test').innerHTML = User.title
        ){
            document.getElementById('ex').style.visibility = "visible"
        }
    }

    MyFunction();
}
  

    // var User = JSON.parse(user1);
    // console.log(User);

    // var oXHR = new XMLHttpRequest();

    // // Initiate request.
    // oXHR.onreadystatechange = reportStatus;
    // oXHR.open("get", "../data/user.json", true);  // get json file.
    
    // oXHR.send();
    // function reportStatus() {
    //     if (oXHR.readyState == 4) {		// Check if request is complete.
    //         // Write data to a DIV element.
    //         document.getElementById('ex').innerHTML = this.responseText;
    //     }
    // }


