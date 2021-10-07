statusCheck = null

// function healthButton() {

//     var health = document.getElementById("health");

//     health.style.backgroundColor = "#CCEBF2";
//     health.style.width = "40px";
//     health.style.height = "40px";
//     health.style.borderRadius = "50%";
//     health.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     health.style.padding = "15px"

//     return true;
    
// }

function fitButton() {

    var fit = document.getElementById("fitness");

    fit.style.backgroundColor = "#D2D2D2";
    fit.style.width = "40px";
    fit.style.height = "40px";
    fit.style.borderRadius = "50%";
    fit.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
    fit.style.padding = "15px"

    statusCheck = !null
    
}

// function learnButton() {

//     var learn = document.getElementById("learn");

//     learn.style.backgroundColor = "#EEDBF3";
//     learn.style.width = "40px";
//     learn.style.height = "40px";
//     learn.style.borderRadius = "50%";
//     learn.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     learn.style.padding = "15px"
    
// }

// function susButton() {

//     var sus = document.getElementById("sus");

//     sus.style.backgroundColor = "#E3F5D0";
//     sus.style.width = "40px";
//     sus.style.height = "40px";
//     sus.style.borderRadius = "50%";
//     sus.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     sus.style.padding = "15px"
    
// }

// function houseButton() {

//     var house = document.getElementById("house");

//     house.style.backgroundColor = "#FEE4DE";
//     house.style.width = "40px";
//     house.style.height = "40px";
//     house.style.borderRadius = "50%";
//     house.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     house.style.padding = "15px"
    
// }

// function relaxButton() {

//     var relax = document.getElementById("relax");

//     relax.style.backgroundColor = "#F9F3C5";
//     relax.style.width = "40px";
//     relax.style.height = "40px";
//     relax.style.borderRadius = "50%";
//     relax.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     relax.style.padding = "15px"
    
// }

// function famButton() {

//     var family = document.getElementById("family");

//     family.style.backgroundColor = "#F6E4B0";
//     family.style.width = "40px";
//     family.style.height = "40px";
//     family.style.borderRadius = "50%";
//     family.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     family.style.padding = "15px"
    
// }

// function finButton() {

//     var finance = document.getElementById("finance");

//     finance.style.backgroundColor = "#D1D9ED";
//     finance.style.width = "40px";
//     finance.style.height = "40px";
//     finance.style.borderRadius = "50%";
//     finance.style.boxShadow = "5px 5px 4px rgba(0, 0, 0, 0.25)"
//     finance.style.padding = "15px"
    
// }




function resetButton() {
    document.getElementById("title").value = null;
    document.getElementById("details").value = null;

    document.getElementById("health").style.backgroundColor = null;
    document.getElementById("health").style.boxShadow = null;
    document.getElementById("health").style.width = "50px";
    document.getElementById("health").style.height = "50px";

    document.getElementById("learn").style.backgroundColor = null;
    document.getElementById("learn").style.boxShadow = null;
    document.getElementById("learn").style.width = "50px";
    document.getElementById("learn").style.height = "50px";

    document.getElementById("fitness").style.backgroundColor = null;
    document.getElementById("fitness").style.boxShadow = null;
    document.getElementById("fitness").style.width = "50px";
    document.getElementById("fitness").style.height = "50px";

    document.getElementById("sus").style.backgroundColor = null;
    document.getElementById("sus").style.boxShadow = null;
    document.getElementById("sus").style.width = "50px";
    document.getElementById("sus").style.height = "50px";

    document.getElementById("house").style.backgroundColor = null;
    document.getElementById("house").style.boxShadow = null;
    document.getElementById("house").style.width = "50px";
    document.getElementById("house").style.height = "50px";

    document.getElementById("house").style.backgroundColor = null;
    document.getElementById("house").style.boxShadow = null;
    document.getElementById("house").style.width = "50px";
    document.getElementById("house").style.height = "50px";

    document.getElementById("relax").style.backgroundColor = null;
    document.getElementById("relax").style.boxShadow = null;
    document.getElementById("relax").style.width = "50px";
    document.getElementById("relax").style.height = "50px";

    document.getElementById("family").style.backgroundColor = null;
    document.getElementById("family").style.boxShadow = null;
    document.getElementById("family").style.width = "50px";
    document.getElementById("family").style.height = "50px";

    document.getElementById("finance").style.backgroundColor = null;
    document.getElementById("finance").style.boxShadow = null;
    document.getElementById("finance").style.width = "50px";
    document.getElementById("finance").style.height = "50px";

    document.getElementById("amount").value = "2";
    // document.getElementById("slide").value = "2";
}

function passData() {
    let makebox = document.createElement("button");
    makebox.value = "";
    makebox.style.backgroundColor = "#CCEBF2";
    makebox.style.border = "2px solid black";
    makebox.style.borderRadius = "8px";
    makebox.style.margin = "20px";
    makebox.style.minWidth = "400px";
    makebox.style.height = "80px";
    makebox.style.display = "flex";
    makebox.style.alignItems = "center";

    document.getElementById('ex').appendChild(makebox)

}
// window.onload = myFunction

// function myFunction() {
    
//     var health = document.getElementById("health");
//     var fit = document.getElementById("fitness");
//     var learn = document.getElementById("learn");
//     var sus = document.getElementById("sus");
//     var house = document.getElementById("house");
//     var relax = document.getElementById("relax");
//     var family = document.getElementById("family");
//     var finance = document.getElementById("finance");

    

//     if(health.onclick) {
//         health.style.backgroundColor = "#CCEBF2";
//         fit.style.backgrounColor = "#fff";
//         learn.style.backgroundColor = "#fff";
//         sus.style.backgroundColor = "#fff";
//         house.style.backgroundColor = "#fff";
//         relax.style.backgroundColor = "#fff";
//         family.style.backgroundColor = "#fff";
//         finance.style.backgroundColor = "#fff";
//     }
//     else if(fit.onclick) {
//         health.style.backgroundColor = "#fff";
//         fit.style.backgrounColor = "#CCEBF2";
//         learn.style.backgroundColor = "#fff";
//         sus.style.backgroundColor = "#fff";
//         house.style.backgroundColor = "#fff";
//         relax.style.backgroundColor = "#fff";
//         family.style.backgroundColor = "#fff";
//         finance.style.backgroundColor = "#fff";
//     }
// }

let input = document.getElementById('title');
let btn = document.querySelector('#save-btn');
let li = document.querySelector('#ex');
let el = document.getElementsByTagName('button');
let form = document.getElementById('new-task-form');
let append = document.getElementById('ex');
let sliceValue = document.getElementById('amount').value;


function Handler(){
    const task = input.value;
    if(!task){
        alert('Fill the title please!');
    }else{
        if(statusCheck != null){

            let new_but = document.createElement('button');
            new_but.classList.add('habit_btn');
            new_but.id = "drinkwater";
            new_but.innerText = task;
            append.appendChild(new_but);

            let new_img = document.createElement('img');
            new_img.classList.add('icon')
            new_img.src = "./images/fitness.png";
            new_but.appendChild(new_img);

            let slice = document.createElement('div');
            slice.

            console.log(new_but)
            statusCheck = null
            }
        
    }

}


let habits = document.querySelectorAll('.cat');
myValue = document.getElementById('amount').value

habits.forEach(cat => {
    cat.addEventListener('click', ()=>{
        
})
})
// localStorage.setItem("commitment-1", $( "#slider-range-max" ).slider( "value" ))
// localStorage.setItem("asdas", 'awdadg')
// document.getElementById("ex").innerHTML = localStorage.getItem("commitment-1");


