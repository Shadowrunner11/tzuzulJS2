import { KEY } from "../.config.js";
import { $ } from "./functions/selectors.js";

const qrs= new URLSearchParams()
qrs.append("key", KEY)



$('[data-button="search"]').addEventListener('click', async event =>{
    event.preventDefault()
    $('[data-input="search"]').value
    const res = await fetch('https://pixabay.com/api/videos/?' + qrs)
    const data = res.json()
})



$('main > section').addEventListener('mouseenter', event =>{
    console.log(event.target)
    event.target.play()
})

$('main > section').addEventListener('mouseout', event =>{
    event.target.stop()
})