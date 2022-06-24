import { KEY } from "../a.config.js";
import { $ } from "./functions/selectors.js";

const qrs = new URLSearchParams(document.location.search);

qrs.append("key", KEY);
const video =  $("#video-principal");
fetch(`https://pixabay.com/api/videos/?${qrs}`)
    .then(response => response.json())
    .then(({
        hits:[{
            videos:{
                large:{
                    url
                }}
        }]
    }) =>{
        video.setAttribute("src", url);
        video.load();
        video.addEventListener("loadeddata", (event)=>{
            event.preventDefault();
            $(".lds-spinner").remove();
        });
    });


$("#play").addEventListener("click",()=>{
    if(video?.readyState){
        if (video?.paused) {
            video?.play();
        } else {
            video?.pause();
        }

    }
});