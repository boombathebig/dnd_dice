var roll = "";
const clickedDice = document.querySelector(".diceTray");
 clickedDice.addEventListener('click', () => {
 var roll= Math.floor(Math.random()*101);
 console.log(roll);
 });
