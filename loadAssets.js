import { usedImages, usedMusic } from "./helpers.js";
import { Promisable } from "./promisable.js";
import { setText } from "./render.js";

let loadedAssets = -1;
let totAssets = 0;

const allAssetsLoaded = new Promisable();

async function gotAsset(name) {
    console.log(`Loaded: ${name}`);
    loadedAssets += 1;
    await setText(`Loading assets: ${loadedAssets}/${totAssets}`);
    if(totAssets <= loadedAssets) {
        allAssetsLoaded.resolve();
    }
}

export async function loadAssets(update_cb) {
    if(totAssets <= loadedAssets) {
        return;
    }
    loadedAssets = 0;
    totAssets = usedImages.size + usedMusic.size;
    for(const img of usedImages) {
        const $img = new Image();
        $img.addEventListener('load', () => gotAsset(img));
        $img.src = img;
    }
    for(const audio of usedMusic) {
        const $audio = new Audio();
        $audio.addEventListener('canplaythrough', () => gotAsset(audio));
        $audio.src = audio;
    }
    await allAssetsLoaded.promise;
}
