
import { sleep } from './helpers.js';
import { Promisable } from './promisable.js';

/** @type HTMLDivElement */
const $block = document.getElementById('block');
/** @type HTMLDivElement */
const $scene = document.getElementById('scene');
/** @type {{ [key: string]: HTMLDivElement }} */
const $sides = {
    left: document.getElementById('left'),
    right: document.getElementById('right')
}
/** @type HTMLDivElement */
const $novelText = document.getElementById('novelText');
/** @type HTMLAudioElement */
const $audioPlayer = document.getElementById('audioPlayer');

const status = {
    music: '',
    img: '',
    text: '',
    color: '',
    sides: {
        left: { img: '', fg: true, inScene: false },
        right: { img: '', fg: true, inScene: false }
    }
}

const timeGray = 500;
const timeMove = 1000;


const press = new Promisable();

$block.addEventListener('click', () => {
    press.resolve();
});

let timeForAnimations = 0;

export async function waitForAnimations() {
    if(timeForAnimations > 0) {
        await sleep(timeForAnimations);
        timeForAnimations = 0;
    }
}

export async function waitForPress() {
    press.refresh(); // For safety to avoid mashing
    await press.reusable();
}

export function getStatus() {
    return { ...status };
}

export async function playMusic(src = '') {
    if(src) {
        $audioPlayer.src = src;
        await $audioPlayer.play();
    } else {
        $audioPlayer.pause();
    }
    status.music = src;
}

export async function slide(side, inScene) {
    const $s = $sides[side];
    if(inScene == $s.classList.contains('outOfScene')) {
        if(inScene) {
            $s.classList.remove('outOfScene');
        } else {
            $s.classList.add('outOfScene');
        }
        timeForAnimations = Math.max(timeForAnimations, timeMove);
        status.sides[side].inScene = inScene;
    }
}

export async function setFG(side, fg) {
    const $s = $sides[side];
    if(fg == $s.classList.contains('gray')) {
        if(fg) {
            $s.classList.remove('gray');
        } else {
            $s.classList.add('gray');
        }
        timeForAnimations = Math.max(timeForAnimations, timeGray);
        status.sides[side].fg = fg;
    }
}

export async function setBG(src) {
    $scene.style.backgroundImage = `url('${src}')`;
    status.img = src;
}

export async function setText(text, color = '') {
    $novelText.style.color = color;
    $novelText.innerHTML = text;
    status.text = text;
    status.color = color;
}

export async function setImage(side, src) {
    const $s = $sides[side];
    $s.style.backgroundImage = `url('${src}')`;
    status.sides[side].img = src;
}
