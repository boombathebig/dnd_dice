var roll = ""; //contents of top-box (current role)
let rollArray= [];
var audio = new Audio('Shake And Roll Dice-SoundBible.com-591494296.wav');

const clickedDice = document.querySelectorAll(".dice");
clickedDice.forEach((dice) => {
    dice.addEventListener('click',(e) =>{
        
        audio.play();
        audio.currentTime=0;
            
        switch(event.target.id){ //individual dice rolls
            
            case "d20":
             var roll= Math.floor(Math.random()*20+1);  
            document.getElementById("currentRollP").innerText = roll;
            rollArray.unshift("1d20 - "+roll)
            document.getElementById("pastResultsP").innerText=rollArray;
            if (rollArray.length>4){
                rollArray.pop();}
                
                break;   
            
            case "d12":
             var roll= Math.floor(Math.random()*12+1);  
             document.getElementById("currentRollP").innerText = roll;
             rollArray.unshift("1d12 - "+roll)
             document.getElementById("pastResultsP").innerText=rollArray;
             if (rollArray.length>4){
                 rollArray.pop();}
                break;

            case "d10":
              var roll= Math.floor(Math.random()*10+1);  
              document.getElementById("currentRollP").innerText = roll;
              rollArray.unshift("1d10 - "+roll)
              document.getElementById("pastResultsP").innerText=rollArray;
              if (rollArray.length>4){
                  rollArray.pop();}
                break;
            
            case "d100":
              var roll= Math.floor(Math.random()*100+1);  
              document.getElementById("currentRollP").innerText = roll;
              rollArray.unshift("1d100 - "+roll)
              document.getElementById("pastResultsP").innerText=rollArray;
              if (rollArray.length>4){
                  rollArray.pop();}
                break;

            case "d6":
               var roll= Math.floor(Math.random()*6+1);  
               document.getElementById("currentRollP").innerText = roll;
               rollArray.unshift("1d6 - "+roll)
               document.getElementById("pastResultsP").innerText=rollArray;
               if (rollArray.length>4){
                   rollArray.pop();}
                break;

             case "d4":
                var roll= Math.floor(Math.random()*4+1);  
                document.getElementById("currentRollP").innerText = roll;
                rollArray.unshift("1d4 - "+roll)
                document.getElementById("pastResultsP").innerText=rollArray;
                if (rollArray.length>4){
                    rollArray.pop();}  
                break;
    }        
    });
    
 
 
 
});
