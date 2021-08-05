import { usedImages, usedMusic } from "./helpers";
import { Promisable } from "./promisable";

const loadedAssets = -1;
let totAssets = 0;

const allAssetsLoaded = new Promisable();

function gotAsset() {
    loadedAssets += 1;
    if(totAssets <= loadedAssets) {
        allAssetsLoaded.resolve();
    }
}

async function loadAssets(update_cb) {
    if(totAssets <= loadedAssets) {
        return;
    }
    loadedAssets = 0;
    totAssets = usedImages.size + usedMusic.size;
    for(const img of usedImages) {
        const $img = new Image();
        $img.onload = gotAsset;
        $img.src = img;
    }
    for(const img of usedMusic) {
        const $audio = new Audio();
        $audio.onload = gotAsset;
        $audio.src = img;
        $audio.load(); // Needed?
    }
    await allAssetsLoaded.promise;
}
