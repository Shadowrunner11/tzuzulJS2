import { createGrid } from "./functions/createGrid";
import { $ } from "./functions/selectors";
import { KEY } from "../.config";

const qrs = new URLSearchParams();
qrs.append("key", KEY);

fetch(`https://pixabay.com/api/videos/?${qrs}`).then((res) => res.json()).then((data) => {
  createGrid(data.hits);

  $("main > section").addEventListener("mouseenter", (event) => {
    if (event.target.src) {
      event.target.play();
    }
  }, true);

  $("main > section").addEventListener("mouseout", (event) => {
    if (event.target.src) {
        event.target.pause();
        event.target.currentTime = 0;
    }
  }, true);
  /* const [videoInfo] = data?.hits
    const videoElement  = $("video[data-id='video']")
    videoElement.load()
    videoElement.setAttribute("src", videoInfo.videos.small.url) */
});

const audioElement = $("#audio");

$("#inputSlide").addEventListener("click", event=>{
    const slidePart = event.target.value;
    console.log(slidePart);
    audioElement.currentTime = audioElement.duration*slidePart/100;
});

$("#play").addEventListener("click", ()=>{
    audioElement.play();
});