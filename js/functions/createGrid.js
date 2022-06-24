import { $ } from "./selectors.js";

export const createGrid = (videosInfo)=>{
    for (let index = 0; index < videosInfo.length; index++) {
        const {videos : {tiny: {url}}, id} =  videosInfo[index];

        const anchorElement  =  document.createElement("a");
        anchorElement.setAttribute("href", "/html/videoPlayer.html?id="+id);
        const videoContainer = document.createElement("video");
        videoContainer.id = "video"+index;
        videoContainer.load();
        videoContainer.setAttribute("src", url);
        // videoContainer.setAttribute("preload","none");
        // videoContainer.setAttribute("poster", videosInfo[index].userImageURL);
        videoContainer.classList.add("soft-border-small");
        anchorElement.appendChild(videoContainer);
        $("main > section").appendChild(anchorElement);
    }
    
};




