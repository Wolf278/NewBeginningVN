
export const usedMusic = new Set();
export const usedImages = new Set();

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function music(name) {
    const src = `music/${name}`;
    usedMusic.add(src);
    return { music: src };
}

export function img(name) {
    const src = `img/${name}`;
    usedImages.add(src);
    return src;
}

export function who(character_sprite, side) {
    const character = character.split('_')[0];
    const src = `character/${character_sprite}.png`;
    usedImages.add(src);
    return (text) => ({
        character, side, text, characterImage: src
    });
}
