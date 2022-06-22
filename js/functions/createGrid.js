import { $ } from "./selectors.js";

export const createGrid = (videosInfo)=>{
    for (let index = 0; index < videosInfo.length; index++) {

        const videoContainer = document.createElement("video");
        videoContainer.id = "video"+index;
        videoContainer.load();
        videoContainer.setAttribute("src", videosInfo[index].videos.tiny.url);
        $("main > section").appendChild(videoContainer);
    }
    
};




