(() => {
  // .config.js
  var KEY = "28196187-1bc806aee26e08146854d1ae3";

  // js/functions/selectors.js
  var $ = (selector, node = document) => node.querySelector(selector);

  // js/video.js
  var qrs = new URLSearchParams(document.location.search);
  qrs.append("key", KEY);
  fetch(`https://pixabay.com/api/videos/?${qrs}`).then((response) => response.json()).then(({ hits: [{ videos: { large: { url } } }] }) => {
    $("#video-principal").setAttribute("src", url);
    $("#video-principal").load();
    $("#video-principal").addEventListener("loadeddata", (event) => {
      event.target.setAttribute("poster", null);
    });
  });
})();
