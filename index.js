let song=document.getElementById('song')
let play = document.getElementById('play')
let pause = document.getElementById('pause')

let progress = document.getElementById('progress')
// play song
function playSong(){
    
    play.style.display ='none'
    pause.style.display = 'flex'

    song.volume = 0.1
    song.play()
}

// pause song
function pauseSong(){

    play.style.display ='flex'
    pause.style.display = 'none'

    song.currentTime = 0
    song.pause()
}

// progress bar event listner

song.addEventListener('timeupdate', ()=>{

    // console.log(song.currentTime)
    // console.log((song.currentTime / song.duration) * 100))
    // console.log(song.duration)

    let percentage = Math.floor((song.currentTime / song.duration) * 100)
    //console.log(percentage)
    progress.style.width = percentage + "%"
})