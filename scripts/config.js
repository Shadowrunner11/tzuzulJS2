import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["./js/index.js", "./js/video.js"],
    bundle: true,
    outdir: "./build",
    watch: true
// eslint-disable-next-line no-console
}).then(result  =>{console.log("builded", result);}).catch(error=> console.log(error) );