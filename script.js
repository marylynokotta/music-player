console.log("Script loaded!");

const playlist = [
    { title: "Yellow Hearts", artist: "Ant Saunders", src: "assets/Ant Saunders - Yellow Hearts (Lyrics)(M4A_128K).m4a" },
    { title: "Rodeo", artist: "Lah Pat", src: "assets/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video](M4A_128K).m4a" },
    { title: "Bad Habits", artist: "Usher", src: "assets/Usher - Bad Habits (Lyrics)(M4A_128K).m4a" },
    { title: "All I Got ", artist: "Baekhyun", src: "assets/SnapTube Audio/All I Got(M4A_128K).m4a" },
    { title: "Last Heartbreak Song", artist: "Ayra Starr ft. Giveon", src: "assets/SnapTube Audio/Ayra Starr - Last Heartbreak Song ft. Giveon (Official Lyric Video)(M4A_128K).m4a" },
    { title: "Bouncing", artist: "Chris Brown", src: "assets/SnapTube Audio/Chris Brown - Bouncing _ G5 (Visualizer)(M4A_128K).m4a" },
    { title: "Cry For Love", artist: "Baekhyun", src: "assets/SnapTube Audio/Cry For Love(M4A_128K).m4a" },
    { title: "Die For Love Remix", artist: "Baekhyun,The Weeknd,Ariana Grande", src: "assets/SnapTube Audio/Die For Love (remix of_Die For You-The Weeknd_Ariana Grande___Cry For Love-BAEKHYUN of EXO_)(M4A_128K).m4a" },
    { title: "Ex-Factor", artist: "Lauryn Hill", src: "assets/SnapTube Audio/Lauryn Hill - Ex-Factor(M4A_128K).m4a" },
    { title: "Rehab", artist: "Rihanna", src: "assets/SnapTube Audio/Rihanna - Rehab (Official Music Video) ft. Justin Timberlake(M4A_128K).m4a" },

];

let currentTrackIndex = null;
let isPlaying = false;
let isRepeating = false;
let isShuffling = false;
let isLiked = false;

const audio = document.getElementById("audio-player");
const title = document.getElementById("track-title");
const artist = document.getElementById("artist-title");
const playBtn = document.getElementById("navigation-circle");
const nextBtn = document.getElementById("next-btn");
const previoustBtn = document.getElementById("prev-btn");
const shuffleBtn = document.getElementById("shuff-btn");
const repeatBtn = document.getElementById("rep-btn");
const likeBtn = document.getElementById("like-btn");



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

//now what loading does
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

// if i want to play another song / picking a random
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

// making of the progress bar 

// A utility helper to format raw seconds (e.g., 75 -> "1:15")
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function initializePlayer(audioElement) {
  const progressBar = document.getElementById('progress-bar');
  const currentTimeText = document.getElementById('current-time');
  const durationTimeText = document.getElementById('duration-time');

  // 1. Set max slider value and duration text when metadata loads
  audioElement.addEventListener('loadedmetadata', () => {
    progressBar.max = Math.floor(audioElement.duration);
    durationTimeText.textContent = formatTime(audioElement.duration);
  });

  // 2. Synchronize slider handle and current time text as track plays
  audioElement.addEventListener('timeupdate', () => {
    progressBar.value = Math.floor(audioElement.currentTime);
    currentTimeText.textContent = formatTime(audioElement.currentTime);
  });

  // 3. Allow user to click/drag the slider to seek to a new time
  progressBar.addEventListener('input', () => {
    audioElement.currentTime = progressBar.value;
    currentTimeText.textContent = formatTime(progressBar.value);
  });
}

initializePlayer(audio);


// making of the like button //

function likeTrack(){
     isLiked = !isLiked;

     likeBtn.classList.toggle("fa-regular", !isLiked);
     likeBtn.classList.toggle("fa-solid", isLiked);

     if(isLiked){
        console.log("Liked")
        } else {
        console.log("Unliked");
    }
}
likeBtn.addEventListener("click", likeTrack);