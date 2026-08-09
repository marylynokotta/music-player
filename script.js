console.log("Script loaded!");

const playlist = [
    { title: "Yellow Hearts", artist: "Ant Saunders", src: "assets/Ant Saunders - Yellow Hearts (Lyrics)(M4A_128K).m4a" },
    { title: "Rodeo", artist: "Lah Pat", src: "assets/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video](M4A_128K).m4a" },
    { title: "Bad Habits", artist: "Usher", src: "assets/Usher - Bad Habits (Lyrics)(M4A_128K).m4a" }
];

let currentTrackIndex = null;
let isPlaying = false;
let isRepeating = false;
let isShuffling = false;

const audio = document.getElementById("audio-player");
const title = document.getElementById("track-title");
const artist = document.getElementById("artist-title");
const playBtn = document.getElementById("navigation-circle");
const progressBar = document.querySelector(".controls-wrapper");
const nextBtn = document.getElementById("next-btn");
const previoustBtn = document.getElementById("prev-btn");
const shuffleBtn = document.getElementById("shuff-btn");
const repeatBtn = document.getElementById("rep-btn");

// selecting the song
function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(index);
    playTrack();
}

// what happens when the song is picked
function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    title.innerText = track.title;
    artist.innerText = track.artist;
}

//how what loading does
function playTrack() {
    if (currentTrackIndex === null) return;

    audio.play().catch(error => {
        console.error("Playback failed:", error);
    });
    isPlaying = true;

    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

// if i want the song to stop
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

// if i want to play another song
function nextSong() {
    if (isShuffling) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * playlist.length);
        } while (randomIndex === currentTrackIndex && playlist.length > 1);
        currentTrackIndex = randomIndex;
    } else if (currentTrackIndex === null) {
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

// if i want my previous song
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

// what if i want the current to be on loop
repeatBtn.addEventListener("click",() => {
    isRepeating = !isRepeating;

    repeatBtn.classList.toggle("active",isRepeating);
});

audio.addEventListener("ended", () => {
    if (isRepeating) {
        audio.currentTime = 0;
        playTrack();
    } else {
        nextSong();
    }
});

// making my playlist juggle randomly
shuffleBtn.addEventListener("click",() => {
    isShuffling = !isShuffling;

    shuffleBtn.classList.toggle("active", isShuffling);
});
