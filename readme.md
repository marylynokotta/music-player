 <div class="sound controls">

        <p>Yellow Hearts - Ant Saunders</p>
        <audio controls src="assets/Ant Saunders - Yellow Hearts (Lyrics)(M4A_128K).m4a"></audio>
    </div>
       
    <div>
        <p>Rodeo (Remix) - Lah Pat ft. Flo Milli</p>
        <audio controls src="assets/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video](M4A_128K).m4a"></audio>
    </div>
        
           <div>
        <p>Bad Habits - Usher</p>
        <audio controls src="assets/Usher - Bad Habits (Lyrics)(M4A_128K).m4a"></audio>
    </div>


    </div>

    <div class="progress-container" id="progress-container">
     <div class="progress" id="progress"></div>
        </div>

    <div class="controls">
            <button id="prev">Play</button>
            <button id="play">Pause</button>
            <button id="next">Previous</button>
            <button id="next">Next</button>

        </div>

    </div>

        <div class="volume-slide">
            <input type="range" min="1" max="100" value="1" id="myRange" class="slider">


        </div>


 const progressBar = document.querySelector('.progress-bar');

progressBar.addEventListener('input', (e) => {
  const value = e.target.value;
  
  // Creates a hard color stop between orange (played) and gray (unplayed)
  progressBar.style.background = `linear-gradient(to right, orange ${value}%, #e0e0e0 ${value}%)`;
});
