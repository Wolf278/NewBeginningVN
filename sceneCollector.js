
import { getStatus, playMusic, setBG, setFG, setImage, setText, slide, waitForAnimations, waitForPress } from './render.js';
import { characterColors } from './story.js';

function getCharacterSide(characterImage) {
    const f = Object.entries(getStatus().sides).find(([_, val]) => val.img === characterImage);
    if(f === undefined) {
        return '';
    }
    return f[0];
}

async function setCharacterImage(side, characterImage) {
    const status = getStatus();
    for(const [forSide, val] of Object.entries(status.sides)) {
        if(forSide == side) continue;
        await setFG(forSide, false); // BG anyone else
    }
    if(!side) {
        await waitForAnimations();
        return;
    }
    const s = status.sides[side];
    if(s.img !== characterImage) {
        if(s.inScene) {
            await slide(side, false); // Throw them out of there
        }
        await waitForAnimations();
        await setImage(side, characterImage); // Change them
        await slide(side, true); // Get them back in!
    }
    await setFG(side, true); // Get them on!
    await waitForAnimations();
}

async function allOut() {
    const status = getStatus();
    for(const [forSide, val] of Object.entries(status.sides)) {
        await setFG(forSide, false); // BG anyone
    }
    await waitForAnimations();
    for(const [forSide, val] of Object.entries(status.sides)) {
        await slide(forSide, false); // Throw all out
    }
    await waitForAnimations();
}

export async function scene(chapter) {
    await setText('');
    await allOut();
    await setBG(chapter.bg);
    for(let line of chapter.dialog) {
        if(typeof(line) === 'string') {
            line = { text: line };
        }
        if(line.music) {
            await playMusic(line.music);
        }
        if(line.text) {
            line.text = line.text.replace('\n', '<br/>');
            if(line.character) {
                if(!line.side) {
                    line.side = getCharacterSide(line.characterImage);
                    if(!line.side) {
                        throw new Error(`Unable to find on scene the character: ${character}`);
                    }
                }
            } else {
                line.side = '';
            }
            await setCharacterImage(line.side, line.characterImage);
            let color = '';
            if(line.character in characterColors) {
                color = characterColors[line.character];
            }
            await setText(line.text, color);
            await waitForPress();
        }
    }
}
