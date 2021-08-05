import { scene } from "./sceneCollector.js";
import { story } from "./story.js";

export const chapters = Object.keys(story);

for(const chapter of chapters) {
    await scene(story[chapter]);
}
