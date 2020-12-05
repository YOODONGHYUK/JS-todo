const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos';
    let toDos = [];

    // delete
    function deleteToDo(event) {
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);
        const cleanToDos = toDos.filter(function(toDo) {
            
            return toDo.id !== parseInt(li.id);
        });
        toDos = cleanToDos; // toDos배열에서 항목 제거
        saveToDos();    // local storage에서 항목 제거
    }

    // save to local storage
    function saveToDos() {
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
    }

    // show ToDo
    function paintToDo(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const newId = toDos.length + 1;
        const span = document.createElement("span");

        delBtn.innerText = "X";
        delBtn.addEventListener("click", deleteToDo);
        span.innerText = text;

        // li 추가
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;  // <li id="1">...<li>

        toDoList.appendChild(li);

        const toDoObj = {
            text: text,
            id: newId
        };

        toDos.push(toDoObj);
        saveToDos();
    }

    // input, add ToDo
    function handleSubmit(event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }

    // local storage -> web
    function loadToDos() {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        
        if(loadedToDos !== null){
            // save -> string, load -> object
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo){ 
                paintToDo(toDo.text); 
            });
        }
    }

    function init() {
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();