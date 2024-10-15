let step = 0;

function move() {
    const a = document.getElementById('logo');
    const b = document.getElementById('name');
    const c = document.getElementById('explore');
    const d = document.getElementById('container');
    const e = document.getElementById('body');
    const f = document.getElementById('overlayText');
    const video = document.getElementById('myVideo');

    a.style.marginTop = "-45em";
    b.style.marginTop = "-31.1em";
    b.style.fontSize = "1.4rem";
    a.style.height = "35px";
    a.style.width = "60px";
    a.style.marginLeft = "-13em"
    a.style.transition = "1.5s";
    b.style.transition = "1.5s";
    a.style.zIndex = "1";
    b.style.zIndex = "1";
    c.style.marginLeft = "68em";
    c.style.marginTop = "12em";
    c.style.transition = "all 2s";
    d.style.background = "rgba(0, 0, 0, 0)";
    d.style.transition = "background 1.5s";
    e.style.background = "rgba(0, 0, 0, 1)";
    e.style.transition = "background 1.5s";

    setTimeout(() => {
        d.style.background = "transparent";
        video.style.display = "block";
        setTimeout(() => {
            video.style.opacity = "1";
            f.style.opacity = "0";
        }, 10);
    }, 10);
}

function changeToSection() {
    const target = document.getElementById('myVideo2');
    const container = document.getElementById('myVideo');
    const oText = document.getElementById('overlayText2')
    container.style.opacity = "0";
    oText.classList.add('blurIn');
    setTimeout(() => {
        target.style.display = "block";
        setTimeout(() => {
            target.style.opacity = "1";

        }, 100);
    }, 100);
}

function changeToSection2() {
    const target = document.getElementById('myVideo3');
    const container = document.getElementById('myVideo2');
    const oText = document.getElementById('overlayText3');
    container.style.opacity = "0";
    setTimeout(() => {
        oText.classList.add('blurIn');
        target.style.display = "block";
        setTimeout(() => {
            target.style.opacity = "1";
        }, 50);
    }, 100);
}

function blurIn() {
    setTimeout(() => {
        const text = document.getElementById('overlayText');
        text.classList.add('blurIn');
    }, 900);
}
function blurIn2() {
    setTimeout(() => {
        const text = document.getElementById('overlayText2');
        text.classList.add('blurIn');
    }, 900);
}
function blurIn3() {
    setTimeout(() => {
        const text = document.getElementById('overlayText3');
        text.classList.add('blurIn');
    }, 900);
}
function blurOut() {
    const text = document.getElementById('overlayText');
    text.classList.remove('blurIn');
    text.classList.add('blurOut');
}
function blurOut2() {
    const text = document.getElementById('overlayText2');
    text.classList.remove('blurIn');
    text.classList.add('blurOut');
}
function blurOut3() {
    const text = document.getElementById('overlayText3');
    text.classList.remove('blurIn');
    text.classList.add('blurOut');
}
function spinner(){
    const div = document.querySelector('.container2');
    const spin = document.querySelector('.spinner-box');
    const expl = document.querySelector('.btn');
    expl.style.opacity = "0"
    div.style.opacity = "0";
    div.style.transition = "0.3s"
    spin.style.zIndex = "1050";
    spin.style.opacity = "1";
}

function changePage() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = "index.html";
    }, 1000); // match the duration in your CSS
  }
function executeFunctionsSequentially() {
    if (step === 0) {
        move();
        blurIn();
        step++;
    } else if (step === 1) {
        blurOut();
        blurIn2();
        setTimeout(() => {
            changeToSection();
        }, 1100);
        step++;
    } else if (step === 2) {
        blurOut2();
        blurIn3();
        changeToSection2();
        step++;
    } else if (step === 3) {
        spinner();
        setTimeout(()=>{
            changePage();
        },4000)
        step++;
    }
}