import { loadAssets } from "./loadAssets.js";
import { scene } from "./sceneCollector.js";
import { story } from "./story.js";

export const chapters = Object.keys(story);

await loadAssets();
for(const chapter of chapters) {
    await scene(story[chapter]);
}
