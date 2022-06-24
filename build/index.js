(() => {
  // js/functions/selectors.js
  var $ = (selector, node = document) => node.querySelector(selector);

  // js/functions/createGrid.js
  var createGrid = (videosInfo) => {
    for (let index = 0; index < videosInfo.length; index++) {
      const { videos: { tiny: { url } }, id } = videosInfo[index];
      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("href", "/html/videoPlayer.html?id=" + id);
      const videoContainer = document.createElement("video");
      videoContainer.id = "video" + index;
      videoContainer.load();
      videoContainer.setAttribute("src", url);
      videoContainer.classList.add("soft-border-small");
      anchorElement.appendChild(videoContainer);
      $("main > section").appendChild(anchorElement);
    }
  };

  // .config.js
  var KEY = "28196187-1bc806aee26e08146854d1ae3";

  // js/index.js
  var qrs = new URLSearchParams();
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
  });
})();
