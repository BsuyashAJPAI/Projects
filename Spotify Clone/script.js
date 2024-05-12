let audioElement = new Audio('song/2.mp3')
// console.log(audioElement)
//initialise the variable
let songIndex = 0;
let masterplay = document.getElementById("masterplay");
let playline = document.getElementById("playline");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
    { filePath: "song/Yeh Haseen Vaadiyan.mp3", coverPath: "Cover/wadiya.jpg" },
    { filePath: "song/Dekha-Hazaro-Dafaa-(pagalworldsongs.co.in).mp3", coverPath: "Cover/rustom.jpg" },
    { filePath: "song/Desh Mere Bhuj - Arijit Singh(DjVikkrant.Com).mp3", coverPath: "Cover/bhuj.jpg" },
    { filePath: "song/Dillagi - Rahat Fateh Ali Khan 320Kbps.mp3", coverPath: "Cover/dillagi.jpg" },
    { filePath: "song/Kaun Kehte Hain Bhagwan Aate Nahi.mp3", coverPath: "Cover/kbn.jpg" },
    { filePath: "song/Main Samjha Tha Tum Ho(PagalWorldl).mp3", coverPath: "Cover/mst.jpg" },
    { filePath: "song/Pehla Pyaar - Kabir Singh.mp3", coverPath: "Cover/pehlapyaar.jpg" },
    { filePath: "song/play.mp3", coverPath: "Cover/.jpg" },
    { filePath: "song/Yaro Ne Mere Vaste - Friends Anthem.mp3", coverPath: "Cover/ynmv.jpg" }
]

songitem.forEach((element, i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // console.log(element.getElementsByClassName("songname")[0].innerText = songs[i].songname);
})

// audioElement.play();

//handle play pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    playline.value = progress;
    console.log(progress)
})

playline.addEventListener('change', () => {
    audioElement.currentTime = playline.value * audioElement.duration / 100;
})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        //     console.log(element)
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        i = parseInt(e.target.id)
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        // console.log(i)
        masterplay
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `song/${i}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
    })
})

