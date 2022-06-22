import { createGrid } from "./functions/createGrid.js"
import { $ } from "./functions/selectors.js"
import { KEY } from "../.config.js"
const qrs= new URLSearchParams()
qrs.append("key", KEY)

fetch('https://pixabay.com/api/videos/?' + qrs).then(res=>res.json()).then(data=>{

    createGrid(data.hits)

    $('main > section').addEventListener('mouseenter', event =>{
        console.log(event.target)
        if(event.target.src){
            try{

                event.target.play()
            }catch{}

        }
    },true)
    
    $('main > section').addEventListener('mouseout', event =>{
        if(event.target.src){
            try{

                event.target.pause()
                event.target.currentTime = 0
            }catch{
                
            }
        }
    },true)
    /* const [videoInfo] = data?.hits
    const videoElement  = $("video[data-id='video']")
    videoElement.load()
    videoElement.setAttribute("src", videoInfo.videos.small.url) */
})