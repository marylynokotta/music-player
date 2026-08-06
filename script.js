const playlist = [
    {title: "Yellow Hearts", artist: "Ant Saunders", src: "assets/Ant Saunders - Yellow Hearts (Lyrics)(M4A_128K).m4a"},
    {title: "Rodeo", artist: "Lah Pat", src: "assets/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video](M4A_128K).m4a"},
    {title: "Bad Habits", artist: "Usher", src: "assets/Usher - Bad Habits (Lyrics)(M4A_128K).m4a"}
];

let currentTrackIndex = null;
let isPlaying = false;

const audio = document.getElementById("audio");
const title = document.getElementById("track-title");
const artist = document.getElementById("artist-title");
const playBtn = document.getElementById("navigation-circle");
const progressBar = document.querySelector(".controls-wrapper");

// a song playing function
function selectTrack(index){
    currentTrackIndex = index;
    loadTrack(index);
    playTrack();  
};

function loadTrack(index){
    const track = playlist[index];
    audio.src = track.src;
    title.innerText = track.title;
    artist.innerText = track.artist;
};

function playTrack() {
    if (currentTrackIndex === null) return;

    audio.play();
    isPlaying = true;

    // Later change the icon to pause here
}

// Pause
function pauseTrack() {
    audio.pause();
    isPlaying = false;

    // Later change the icon back to play here
}

function togglePlay() {
    if (currentTrackIndex === null) return;

    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
};





