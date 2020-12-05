const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos'; // LS = localstorage

    function paintToDo(text) {
        const li = document.createElement("li"); // html에 요소 추가
        const delBtn = document.createElement("button");
        delBtn.innerText = "X";
        const span = document.createElement("span");
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span); //span을 father element인 li안에 넣기
        toDoList.appendChild(li); // 위 과정을 통해 만든 li를 toDoList(ul)에 넣기
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }


    function loadToDos() {
        const toDos = localStorage.getItem(TODOS_LS);
        
        if(toDos !== null){

        }
    }

    function init() {
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();