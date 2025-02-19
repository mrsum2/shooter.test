const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentGun = 'AK-47';
let recoilX = 0;
let recoilY = 0;
let isFiring = false;

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'blue',
};

const bot = {
    x: canvas.width / 2 + 150,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'green',
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBot() {
    ctx.fillStyle = bot.color;
    ctx.fillRect(bot.x, bot.y, bot.width, bot.height);
}

function applyRecoil() {
    if (isFiring) {
        if (currentGun === 'AK-47') {
            recoilX += 0.5;
            recoilY -= 0.5;
        } else if (currentGun === 'Desert Eagle') {
            recoilY -= 5;
        }
    }

    player.x += recoilX;
    player.y += recoilY;

    recoilX *= 0.9;
    recoilY *= 0.9;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBot();
    applyRecoil();
    requestAnimationFrame(draw);
}

window.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        currentGun = 'AK-47';
    } else if (e.key === '2') {
        currentGun = 'Desert Eagle';
    } else if (e.key === ' ') {
        isFiring = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
        isFiring = false;
    }
});

draw();
