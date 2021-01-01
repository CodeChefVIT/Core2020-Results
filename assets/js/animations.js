function bravo() {
    let data = 'https://weichiachang.github.io/easter-eggs-mobile/images/bravo.gif'
    var img = new Image();
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '374px';
    img.style.height = '500px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = '-374px';
    img.style.bottom = 'calc(-50% + 450px)';
    img.style.zIndex = 999999;
    document.body.appendChild(img);
    window.setTimeout(function () {
        img.style.left = 'calc(50% - 187px)';
    }, 50);
    window.setTimeout(function () {
        img.style.left = 'calc(120% + 375px)';
    }, 2300);
}

function winner() {
    var data = 'https://weichiachang.github.io/easter-eggs-mobile/images/winner.gif'
    var img = new Image;
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '450px';
    img.style.height = '400px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 200px)';
    img.style.bottom = '-400px';
    img.style.zIndex = 999999;
    document.body.appendChild(img);
    window.setTimeout(function () {
        img.style.bottom = '-65px';
    }, 30);
    window.setTimeout(function () {
        img.style.bottom = '-600px';
    }, 4300);
}

function board() {
    let data = 'https://weichiachang.github.io/easter-eggs-mobile/images/board.gif'
    var img = new Image();
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '350px';
    img.style.height = '350px';
    img.style.transition = '6s all linear';
    img.style.position = 'fixed';
    img.style.left = '-400px';
    img.style.bottom = '-40px';
    img.style.zIndex = 999999;
    document.body.appendChild(img);
    window.setTimeout(function () {
        img.style.left = 'calc(100% + 500px)';
    }, 50);
}