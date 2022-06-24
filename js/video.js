import { KEY } from "../a.config.js";
import { $ } from "./functions/selectors.js";

const qrs = new URLSearchParams(document.location.search);

qrs.append("key", KEY);

fetch(`https://pixabay.com/api/videos/?${qrs}`)
    .then(response => response.json())
    .then(({hits:[{videos:{large:{url}}}]}) =>{
        $("#video-principal").setAttribute("src", url);
        $("#video-principal").load();
        $("#video-principal").addEventListener("loadeddata", (event)=>{
            event.preventDefault();
            $("#video-principal").setAttribute("poster", null);
        });
    });
