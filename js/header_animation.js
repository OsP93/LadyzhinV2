window.onload = function () {
    let rBlock = document.getElementById('rightblock');
    let rBlockCont = document.getElementById('rightblockContent');
    let nav = document.getElementById('nav');
    let qrBlock = document.getElementById('rightblockContentQr');

    setTimeout(function(){
        rBlock.classList.remove('hidden');
        rBlock.classList.add('fadeInRight');
        nav.classList.remove('hidden');
        nav.classList.add('fadeInLeft');
    }, 1700);
    

    setTimeout(function(){
        rBlockCont.classList.remove('hidden');
        rBlockCont.classList.add('fadeIn');
        qrBlock.classList.remove('hidden');
        qrBlock.classList.add('fadeIn');
    }, 3000);

    // setTimeout(function(){
    //     nav.classList.remove('hidden');
    //     nav.classList.add('fadeInLeft');
    // }, 1500);
}