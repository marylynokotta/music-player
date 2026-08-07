console.log("Script loaded!");

const playlist = [
    { title: "Yellow Hearts", artist: "Ant Saunders", src: "assets/Ant Saunders - Yellow Hearts (Lyrics)(M4A_128K).m4a" },
    { title: "Rodeo", artist: "Lah Pat", src: "assets/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video](M4A_128K).m4a" },
    { title: "Bad Habits", artist: "Usher", src: "assets/Usher - Bad Habits (Lyrics)(M4A_128K).m4a" }
];

let currentTrackIndex = null;
let isPlaying = false;

const audio = document.getElementById("audio-player");
const title = document.getElementById("track-title");
const artist = document.getElementById("artist-title");
const playBtn = document.getElementById("navigation-circle");
const progressBar = document.querySelector(".controls-wrapper");
const nextBtn = document.getElementById("next-btn");
const previoustBtn = document.getElementById("prev-btn");

// Select and play a specific track
function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(index);
    playTrack();
}

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    title.innerText = track.title;
    artist.innerText = track.artist;
}

function playTrack() {
    if (currentTrackIndex === null) return;

    audio.play().catch(error => {
        console.error("Playback failed:", error);
    });
    isPlaying = true;

    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;

    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
}

function togglePlay() {
    console.log("Play button clicked");

    if (currentTrackIndex === null) {
        selectTrack(0);
        return;
    }

    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

playBtn.addEventListener("click", togglePlay);


function nextSong() {
    if (currentTrackIndex === null) {
        currentTrackIndex = 0;
    } else if (currentTrackIndex === playlist.length - 1) {
        currentTrackIndex = 0;
    } else {
        currentTrackIndex += 1;
    }

    loadTrack(currentTrackIndex);
    playTrack();
}

nextBtn.addEventListener("click", nextSong);

function prevSong(){
    if (currentTrackIndex === null) {
        currentTrackIndex = 0;
    } else if (currentTrackIndex === 0) {
        currentTrackIndex = playlist.length - 1;
    } else {
        currentTrackIndex -= 1;
    }

    loadTrack(currentTrackIndex);
    playTrack();
}

previoustBtn.addEventListener("click", prevSong);



