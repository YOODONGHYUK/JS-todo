const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
            minutes < 10 ? `0${minutes}` : minutes} : ${
            seconds < 10 ? `0${seconds}` : seconds}`;  //삼항연산자이용 10미만에서 앞에 0, 이상은 원래대로
        
}

function init(){
    getTime();
    setInterval(getTime, 1000); //반복할 인자, 시간(milliseconds)
}

init();