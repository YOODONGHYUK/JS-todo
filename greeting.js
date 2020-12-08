const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //submit이벤트 발생시 새로고침금지
    const currentValue = input.value; // input을 통해 입력된 value
    paintGreeting(currentValue);
    saveName(currentValue); //input받은 value 저장
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // 이름 입력창 제거
    greeting.classList.add(SHOWING_CN); // greeting 보여짐
    greeting.innerText = `Hello! ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
