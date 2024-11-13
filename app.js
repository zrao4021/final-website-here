function setnewimg(){
    document.getElementById(`imgcard`).src="over-apple.png"
}

function setoldimg(){
    document.getElementById(`imgcard`).src="apple_juice.png"
    
}

function secimg(){
    document.getElementById('orange').src="over-orange.png"
}

function secoldimg(){
    document.getElementById('orange').src="orange_juice.png"
}
function thirdimg(){
    document.getElementById('mango').src="over-mango.png"
   
}
function oldimg(){
    document.getElementById('mango').src="mango-juive.png"
   
}
function forthimg(){
    document.getElementById('strawberry').src="over-strawberry.png"
   
}
function fortholdimg(){
    document.getElementById('strawberry').src="strawberry-juice.png"
   
}

function fifthimg(){
    document.getElementById('cherry').src="over-cherry.png"
   
}
function fiftholdimg(){
    document.getElementById('cherry').src="cherry-juice.png"
   
}
function sixthimg(){
    document.getElementById('watermelon').src="over-watermelon.png"
   
}
function sixtholdimg(){
    document.getElementById('watermelon').src="watermelon-juice.png"
   
}
function seventhimg(){
    document.getElementById('banana').src="over-banana.png"
   
}
function seventholdimg(){
    document.getElementById('banana').src="banana-juice-image.png"
   
}
function eighthimg(){
    document.getElementById('grapes').src="over-grapes.png"
   
}
function eightholdimg(){
    document.getElementById('grapes').src="grapes.img.ng.webp"
   
}
function ordercalling(){
    alert("welcome user.! Your order is being processed..!!")
}
// counetr section jawascript starts from here.

let valueDisplays = document.querySelectorAll(".count");
let interval = 40;

valueDisplays.forEach((valueDisplays) => {
    let startvalue = 0;
    let endvalue =  parseInt(valueDisplays.getAttribute("data-target"))
    let duration =parseFloat(interval / endvalue)
    let counter = setInterval( function () {
      startvalue +=1;
      valueDisplays.textContent = startvalue;
      if(startvalue == endvalue){
        clearInterval(counter);
      }
      else{
        
      }

    }, duration);

});




           
       
