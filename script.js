var roll = ""; //contents of top-box (current role)


const clickedDice = document.querySelectorAll(".dice");
clickedDice.forEach((dice) => {
    dice.addEventListener('click',(e) =>{
    
        switch(event.target.id){ //individual dice rolls
            
            case "d20":
             var roll= Math.floor(Math.random()*20+1);  
            document.getElementById("currentRollP").innerText = roll;
                break;   
            
            case "d12":
             var roll= Math.floor(Math.random()*12+1);  
             document.getElementById("currentRollP").innerText = roll;
                break;

            case "d10":
              var roll= Math.floor(Math.random()*10+1);  
              document.getElementById("currentRollP").innerText = roll;
                break;
            
            case "d100":
              var roll= Math.floor(Math.random()*100+1);  
              document.getElementById("currentRollP").innerText = roll;
                break;

            case "d6":
               var roll= Math.floor(Math.random()*6+1);  
               document.getElementById("currentRollP").innerText = roll;
                break;

             case "d4":
                var roll= Math.floor(Math.random()*4+1);  
                document.getElementById("currentRollP").innerText = roll;
                  break;
    }        
    });
    
 
});