(()=>{var r=(e,t=document)=>t.querySelector(e);var a=e=>{for(let t=0;t<e.length;t++){let o=document.createElement("video");o.id="video"+t,o.load(),o.setAttribute("src",e[t].videos.tiny.url),r("main > section").appendChild(o)}};var c="28196187-1bc806aee26e08146854d1ae3";var i=new URLSearchParams;i.append("key",c);fetch("https://pixabay.com/api/videos/?"+i).then(e=>e.json()).then(e=>{a(e.hits),r("main > section").addEventListener("mouseenter",t=>{if(console.log(t.target),t.target.src)try{t.target.play()}catch{}},!0),r("main > section").addEventListener("mouseout",t=>{if(t.target.src)try{t.target.pause(),t.target.currentTime=0}catch{}},!0)});})();
