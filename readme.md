 const audio = document.getElementById("audio");


 /* --- Global Container Setup --- */
* {
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.music-player {
    width: 350px;
    padding: 24px;
    text-align: center;
}

/* --- Top Navigation Bar --- */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.top-bar i {
    font-size: 1.2rem;
    padding: 8px;
    cursor: pointer;
}

/* --- Album Cover & Text Positioning --- */
.song-img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 20px auto;
    display: block;
}

#track-title {
    font-size: 1.5rem;
    margin-bottom: 6px;
}

#artist-title {
    font-size: 0.95rem;
    margin-bottom: 24px;
}

/* --- Progress Bar & Layout --- */
.controls-wrapper {
    width: 100%;
    margin-bottom: 25px;
}

#progress-bar {
    width: 100%;
    cursor: pointer;
    display: block;
}

.time-display {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin-top: 8px;
}

/* --- Main Navigation Controls --- */
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 25px;
}

/* Side Icons (Shuffle, Prev, Next, Repeat) */
.navigation i {
    font-size: 1.25rem;
    cursor: pointer;
}

/* Central Play/Pause Button Sizing & Centering */
#navigation-circle {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
}

/* Adjustment for pure FontAwesome play triangle alignment */
#navigation-circle.fa-play {
    padding-left: 3px; 
}

/* --- Bottom Bar Icons --- */
.bottom-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
}

.bottom-icons i {
    font-size: 1.15rem;
    cursor: pointer;
}