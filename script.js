function openSoon(){
    const openingDate = new Date('October 26, 2023 20:48');
    const today = new Date()
    const result = openingDate - today;

    const mlInSecond = 1000;
    const mlInMinUte = 60 * 1000;
    const mlInHour = 60 * 60 * 1000;
    const mlInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(result/mlInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((result%mlInDay) / mlInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((result%mlInHour) / mlInMinUte);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((result%mlInMinUte) / mlInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if(result < 0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(clear)
        weAreOpen()

    }
}

const clear  = setInterval(openSoon, 1000)


function weAreOpen(){
    const heading = document.querySelector('h2');
    heading.textContent = `We're finally open!`
}


const button = document.querySelector('.btn');
const audio = document.querySelector('#song');

button.addEventListener('click', function(){
    if(audio.paused){
        audio.play();
    }

    else{
        audio.pause()
    }
})
openSoon()


let scrollContainer = document.querySelector('.gallery');
let  backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

nextBtn.addEventListener('click', () =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener('click', () =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
})
