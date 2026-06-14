// MUSIC AUTO PLAY ON FIRST CLICK
document.body.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once:true });

// OPEN CARD FLOW
function openCard(){
  document.querySelector(".envelope-scene").style.display="none";
  document.getElementById("card").style.display="block";
  document.getElementById("card").scrollIntoView({behavior:"smooth"});
}

// COUNTDOWN REALTIME
const weddingDate = new Date("2026-09-27T11:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

  document.getElementById("countdown").innerHTML =
    `<h3>${days} hari ${hours} jam lagi ❤️</h3>`;
}, 1000);