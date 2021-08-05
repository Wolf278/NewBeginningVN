
export const usedMusic = [];
export const usedImages = [];

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function music(name) {
    return { music: name };

}

export function img(name) {
    return name;
}

export function who(character, side) {
    return (text) => ({
        character, side, text
    });
}
