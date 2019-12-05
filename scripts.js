
window.addEventListener("load", function (){
   
   let rocket = document.getElementById("rocket");
   rocket.style.position = "absolute";
   rocket.style.bottom = "0px";
   rocket.style.left = "0px";

  let takeOff = document.getElementById("takeoff");
  takeOff.addEventListener("click",function(){
  let response = window.confirm("'The shuttle ready for take off?'");
  if (response === true){
      let flight =document.getElementById("flightStatus");
      flight.innerHTML =  "Shuttle in fligth.";
      let bGround = document.getElementById("shuttleBackground");
      bGround.style.backgroundColor = "blue";
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      shuttleHeight.innerHTML += Number(10000);
  } else {
      alert("Press take off button again and hit ok when ready for take off.")
  }
    });
    let land = document.getElementById("landing");
    land.addEventListener("click",function(){
         window.alert("'The shuttle is landing. Landing gear engaged.'");
            let flight =document.getElementById("flightStatus");
            flight.innerHTML =  "The shuttle has landed.";
            let bGround = document.getElementById("shuttleBackground");
            bGround.style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = 0;
    });
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click",function(){
    let response = window.confirm("'Confirm that you want to abort the mission.'");
    if (response === true){
        let flight =document.getElementById("flightStatus");
        flight.innerHTML =  "Mssion aborted.";
        let bGround = document.getElementById("shuttleBackground");
        bGround.style.backgroundColor = "green";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = 0;
    }
      });
   
      let up = document.getElementById("up");
      up.addEventListener("click", function(){
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 +"px";

        
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let move=parseInt(shuttleHeight.innerHTML);
        shuttleHeight.innerHTML= move+10000;
      });

      let down = document.getElementById("down");
      down.addEventListener("click", function(){
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 +"px";

          let shuttleHeight = document.getElementById("spaceShuttleHeight");
          let move=parseInt(shuttleHeight.innerHTML)
        shuttleHeight.innerHTML=move - 10000;
      });
     
      let left = document.getElementById("left");
      left.addEventListener("click", function(){
        rocket.style.left = parseInt(rocket.style.left) -10 +"px"
      });

      let right = document.getElementById("right");
      right.addEventListener("click", function(){
          rocket.style.left = parseInt(rocket.style.left) +10 +"px"
      });
});















         

      

