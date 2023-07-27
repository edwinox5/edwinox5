const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('❤❤nose si lo escojio pero si estas viendo esto esque dijiste que si amor y pues y pues mi niña 💕❤preciosa❤💕 gracias te amo mucho mucho mi niña hermosa y quiero todo con tigo bb besito y abrazo amor te amo ❤❤liss❤❤ eres lo mejor que me paso mi vida no la cambiaria por nada❤')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})