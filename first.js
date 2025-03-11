
document.getElementById('back').addEventListener('click', function () {
   var button = document.getElementById('mystart');
   var button1 = document.getElementById('mynew');
   var button2 = document.getElementById('myset');
   var players = document.getElementById('selectplay');
   var body = document.getElementById('structure');
   var backArrow = document.getElementById('back'); 
   var life1 = document.getElementById('life1');
   var life2 = document.getElementById('life2');
   var stop  = document.getElementById('stop');
   body.style.backgroundImage = 'url(https://images5.alphacoders.com/130/1302520.jpg)';
   body.style.backgroundSize = 'cover'; 
   life1.style.display='none';
   life2.style.display='none';
   stop.style.display='none';
   body.style.backgroundRepeat = 'no-repeat';   
    body.style.backgroundColor = 'gray'; 
    body.style.backgroundposition ='center';
   body.style.backgroundAttachment = 'fixed';  
   body.style.backgroundBlendMode = 'multiply'; 
   players.style.display = 'none';
   backArrow.style.display = 'none';
   button.style.display = 'block';
   button1.style.display = 'block';
   button2.style.display = 'block';

});






const audio = document.getElementById('audio');
const audioPlayIcon = document.getElementById('audioPlay');
const audioRange = document.getElementById('audioRange');

let isAudioPlaying = false;
audio.volume = audioRange.value;
audioPlayIcon.addEventListener('click', () => {
 if (isAudioPlaying) {
    audio.pause();
    audioPlayIcon.style.color = "white"; 
 } else {
    audio.play();
    audioPlayIcon.style.color = "blue";  
 }
    isAudioPlaying = !isAudioPlaying;  
    });
     audio.loop = true;  
     audioRange.addEventListener('input', () => {
     audio.volume = audioRange.value;  
  });

 audio.addEventListener('pause', () => {
 audio.currentTime = 0;  
  });

  window.addEventListener('beforeunload', function () {
       audio.pause();  
   });

   function change() {

var button = document.getElementById('mystart');
var button1 = document.getElementById('mynew');
var button2 = document.getElementById('myset');
var players = document.getElementById('selectplay');
var body = document.getElementById('structure');
var backArrow = document.getElementById('back');
button.style.display = 'none';
button1.style.display = 'none';
button2.style.display = 'none';
players.style.display = 'block';
body.style.backgroundImage = 'url(./audio/bac1.png)';
   body.style.backgroundSize = 'cover'; 
   body.style.backgroundRepeat = 'no-repeat';   
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.801)'; 
    body.style.backgroundposition ='center';
   body.style.backgroundAttachment = 'fixed';  
   body.style.backgroundBlendMode = 'multiply'; 
   backArrow.style.display = 'block';
players.classList.remove('show');  
players.offsetHeight;  

setTimeout(() => {
   players.classList.add('show');
}, 10);  
}


   

   function changeset() {
       var button = document.getElementById('mystart');
       var button1 = document.getElementById('mynew');
       var button2 = document.getElementById('myset');
       var show = document.getElementById("showset");
       button.style.display = 'none';
       button1.style.display = 'none';
       button2.style.display = 'none';
       show.style.display = 'block';
       setTimeout(() => {
           show.classList.add('show');
       }, 10);
   }

   function apply() {
       var show = document.getElementById("showset");
       var button = document.getElementById('mystart');
       var button1 = document.getElementById('mynew');
       var button2 = document.getElementById('myset');
       show.classList.remove('show');
       setTimeout(() => {
           show.style.display = 'none';
           button.style.display = 'block';
           button1.style.display = 'block';
           button2.style.display = 'block';
           var container = document.querySelector('.container');
           container.style.display = 'flex';
           container.style.flexDirection = 'column';
           container.style.justifyContent = 'center';
           container.style.alignItems = 'center';
       }, 2000);
   };


   const player = [
      { name: 'akuma', img: './audio/akuma.png' },
      { name: 'ken', img: './audio/ken.png' },
      { name: 'ryu', img: './audio/ryu.png' },
      { name: 'roleno', img: './audio/roleno.png' },
      { name: 'lucia', img: './audio/lucia.png' },
      { name: 'terrybogard', img: './audio/terry.png' },
      { name: 'joehigashi', img: './audio/joe.png' },
      { name: 'luke', img: './audio/luke.png' },
      { name: 'chunli', img: './audio/chunli.png' },
      { name: 'jp', img: './audio/jp.png' }
  ];
  
  const players = [
      'akuma', 'ken', 'ryu', 'roleno', 'lucia',
      'terrybogard', 'joehigashi', 'luke', 'chunli', 'jp'
  ];
  
  let player1Selection = null;
  let player2Selection = null;
  
  document.querySelectorAll('.box').forEach(box => {
      box.addEventListener('click', (event) => {
          if (player1Selection === null) {
              player1Selection = event.target.id;
              document.getElementById('usersplay').innerText = player1Selection;
              const selectedPlayer = player.find(p => p.name === player1Selection);
              document.getElementById('player1-image-left').src = selectedPlayer.img;
              document.getElementById('player1-image-left').alt = selectedPlayer.name;
              document.getElementById('player1-image-left').style.display = 'block'; 
              announcePlayer(player1Selection);
              startRandomSelection();
          }
      });
  });
  
  function startRandomSelection() {
      let highlightedBoxes = [];
      let count = 0;
      document.querySelectorAll('.box').forEach(box => box.style.pointerEvents = 'none');
      let highlightInterval = setInterval(() => {
          document.querySelectorAll('.box').forEach(b => b.style.outline = 'none');
          const randomPlayer = players[Math.floor(Math.random() * players.length)];
          const box = document.getElementById(randomPlayer);
          box.style.outline = '5px solid white';
          highlightedBoxes.push(randomPlayer);
          count++;
          if (count >= 16) {
              clearInterval(highlightInterval);
              selectSecondPlayer();
          }
      }, 250);
  }
  
  function selectSecondPlayer() {
      const remainingPlayers = players.filter(player => player !== player1Selection);
      player2Selection = remainingPlayers[Math.floor(Math.random() * remainingPlayers.length)];
      document.getElementById('aiplay').innerText = player2Selection;
      const selectedPlayer = player.find(p => p.name === player2Selection);
      document.getElementById('player2-image-right').src = selectedPlayer.img;
      document.getElementById('player2-image-right').alt = selectedPlayer.name;
      document.getElementById('player2-image-right').style.display = 'block'; 
  
      announcePlayer(player2Selection);
  }
  
  function announcePlayer(playerName) {
      if (playerName) {
          const utterance = new SpeechSynthesisUtterance(playerName); 
          utterance.lang = 'en-US'; 
          utterance.pitch = 1;       
          utterance.rate = 1;        
          speechSynthesis.speak(utterance);
      } else {
          console.error("Player name is not provided!");
      }
  }
  
  function reset() {
      player1Selection = null;
      player2Selection = null;
      document.getElementById('usersplay').innerText = '';
      document.getElementById('aiplay').innerText = '';
      document.getElementById('player1-image-left').style.display = 'none';
      document.getElementById('player2-image-right').style.display = 'none';
      document.querySelectorAll('.box').forEach(box => {
          box.style.outline = 'none';
      });
      document.querySelectorAll('.box').forEach(box => {
          box.style.pointerEvents = 'auto';
      });
      speechSynthesis.cancel();
  };
  
  
  
  
  
  function plays() {
      var body = document.getElementById('structure');
      var vs = document.getElementById('between');  
      var play1 = document.getElementById('player1-image-left');
      var play2 = document.getElementById('player2-image-right');
      var players = document.querySelectorAll('#selectplay .box');  
      var buttonsAndText = document.querySelectorAll('#selectplay button, #selectplay h1, #selectplay p');  
      var life1 = document.getElementById('life1');
      var life2 = document.getElementById('life2');
      var gmName = document.getElementById('gameName');
      var stop  = document.getElementById('stop');
      var back = document.getElementById('back');
      if (!player1Selection || !player2Selection) {
          alert("Please select both players before starting the game!");
          return; 
      }
      back.style.display = 'none'
      play1.style.opacity = '1';
      
      play2.style.opacity = '1';
      vs.style.display = 'block';
  
      players.forEach(selectplay => {
          selectplay.style.opacity = '0'; 
      });
      buttonsAndText.forEach(item => {
          item.style.opacity = '0'; 
      });
  
      setTimeout(function() {
          life1.style.display='block';
           life2.style.display='block';
           gmName.style.display = 'block';
           stop.style.display='block';
          body.style.background = 'url(./audio/bac1.png)';
          body.style.backgroundSize = 'cover'; 
          body.style.backgroundRepeat = 'no-repeat';  
          body.style.backgroundColor = 'rgba(0, 0, 0, 0.801)';  
          body.style.backgroundPosition = 'center';
          body.style.backgroundAttachment = 'fixed';  
          body.style.backgroundBlendMode = 'multiply'; 
          play1.style.opacity = '0';
          play2.style.opacity = '0';
          vs.style.display = 'none';
      }, 3000); 
  


      
  }
  function newchange() {
      console.log('newchange');
        var button = document.getElementById('mystart');
      var button1 = document.getElementById('mynew');
      var button2 = document.getElementById('myset');
      var players = document.getElementById('selectplay');
      var body = document.getElementById('structure');
      var backArrow = document.getElementById('back');
      
      body.style.backgroundImage = 'url(./audio/bac1.png)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.801)';
      body.style.backgroundPosition = 'center';
      body.style.backgroundAttachment = 'fixed';
      body.style.backgroundBlendMode = 'multiply'; 
      
      button.style.display = 'none';
      button1.style.display = 'none';
      button2.style.display = 'none';
      players.style.display = 'block';
      backArrow.style.display = 'block';
      
      players.classList.remove('show');
      players.offsetHeight;  
      
      setTimeout(() => {
          players.classList.add('show');
      }, 10); 
  }
  
  
  
  function newchanges() {
    
      player1Selection = null;
      player2Selection = null;
      document.getElementById('usersplay').innerText = '';
      document.getElementById('aiplay').innerText = '';
      document.getElementById('player1-image-left').style.display = 'none';
      document.getElementById('player2-image-right').style.display = 'none';
      document.querySelectorAll('.box').forEach(box => {
          box.style.outline = 'none';
      });
      document.querySelectorAll('.box').forEach(box => {
          box.style.pointerEvents = 'auto';
      });
      const vs = document.getElementById('between');
      const players = document.querySelectorAll('#selectplay .box');
      const buttonsAndText = document.querySelectorAll('#selectplay button, #selectplay h1, #selectplay p');
      vs.style.display = 'none';  
      players.forEach(selectplay => {
          selectplay.style.opacity = '1';  
      });
      buttonsAndText.forEach(item => {
          item.style.opacity = '1'; 
      });
      document.getElementById('showset').style.display = 'none'; 
      const button = document.getElementById('mystart');
      const button1 = document.getElementById('mynew');
      const button2 = document.getElementById('myset');
      button.style.display = 'none';
      button1.style.display = 'none';
      button2.style.display = 'none';
      const playersPanel = document.getElementById('selectplay');
      playersPanel.style.display = 'block';
      const body = document.getElementById('structure');
      body.style.backgroundImage = 'url(./audio/bac1.png)';
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.801)';
      body.style.backgroundPosition = 'center';
      body.style.backgroundAttachment = 'fixed';
      body.style.backgroundBlendMode = 'multiply';
      const backArrow = document.getElementById('back');
      backArrow.style.display = 'block';
      playersPanel.classList.remove('show');
      playersPanel.offsetHeight;  
      setTimeout(() => {
          playersPanel.classList.add('show');
      }, 10);
      speechSynthesis.cancel();
  };
  
   function stop(){
     var continuefight = document.getElementById('continuefight');
     continuefight.style.display='block';
   }
   function resumebuton() {
    var continuefight = document.getElementById('continuefight');
    continuefight.style.display='none';
   }

   function dones(){
    var continuefight = document.getElementById('continuefight');
    continuefight.style.display='none';
   }




   function characterpage(){
    var button = document.getElementById('mystart');
    var button1 = document.getElementById('mynew');
    var button2 = document.getElementById('myset');
    var players = document.getElementById('selectplay');
    var body = document.getElementById('structure');
    var backArrow = document.getElementById('back'); 
    var life1 = document.getElementById('life1');
    var life2 = document.getElementById('life2');
    var stop  = document.getElementById('stop');
    var gmName = document.getElementById('gameName')
    var continuefight = document.getElementById('continuefight');
    continuefight.style.display='none';
    body.style.backgroundImage = 'url(https://images5.alphacoders.com/130/1302520.jpg)';
    body.style.backgroundSize = 'cover'; 
    life1.style.display='none';
    life2.style.display='none';
    stop.style.display='none';
    body.style.backgroundRepeat = 'no-repeat';   
     body.style.backgroundColor = 'rgba(0, 0, 0, 0.295)'; 
     body.style.backgroundposition ='center';
    body.style.backgroundAttachment = 'fixed';  
    body.style.backgroundBlendMode = 'multiply'; 
    players.style.display = 'none';
    backArrow.style.display = 'none';
    gmName.style.display = 'none';
    button.style.display = 'block';
    button1.style.display = 'block';
    button2.style.display = 'block';
 
   }
 
document.getElementById('reloadButton').addEventListener('click', function () {
    location.reload(); 
});
