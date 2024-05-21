let todoEl=document.getElementById("todo");
let AddEl=document.getElementById("add");
let todoLists=document.getElementById("todoLists")

AddEl.addEventListener('click',()=>{
    console.log(todoEl.value);

    const todoList=document.createElement('div');
    todoList.classList.add("todo-list");
    todoLists.append(todoList)

    const todoListCon=document.createElement('div');
    todoListCon.classList.add("todo-list-con");
    todoList.append(todoListCon);

    // const todoRadio=document.createElement('input');
    // todoRadio.setAttribute('type','radio')
    // todoListCon.append(todoRadio);

    const todoRadio=document.createElement('i');
    todoRadio.classList.add("fa-regular","fa-circle","fa-lg")
    todoListCon.append(todoRadio);

    const todoListItem=document.createElement('p');
    todoListItem.innerText=todoEl.value;
    todoListItem.classList.add("todoItem");
    todoListCon.append(todoListItem);

    const editIcon=document.createElement('i');
    editIcon.classList.add("fa-regular", "fa-pen-to-square","fa-lg" ,"editIcon")
    todoList.append(editIcon);
    editIcon.addEventListener('click', ()=>{
        todoEl.value=todoListItem.innerText;
        console.log(todoEl.value=todoListItem.innerText)
        todoList.remove(todoListCon)
    })

    
    
    const removeIcon=document.createElement('i');
    removeIcon.classList.add("fa-solid", "fa-trash","fa-lg" ,"removeIcon")
    // removeIcon.classList.add("bx", "bx-box", "removeIcon");
    // // todoList.innerText=todoEl.value;
    // // todoList.classList.add("todoItem");
    todoList.append(removeIcon);
    removeIcon.addEventListener('click', () => {
        // Remove the parent todoList element from the DOM
        todoList.remove();
    });

    // todoRadio.addEventListener('change', () => {
    //     if (todoRadio.checked) {
    //         // If the radio button is checked, apply text-decoration: line-through to the text
    //         todoListItem.style.textDecoration = "line-through";
    //         todoListItem.style.textDecorationColor = "red";
    //     } else {
    //         // If the radio button is unchecked, remove the text-decoration
    //         todoListItem.style.textDecoration = "none";
    //     }
    // });
    // todoRadio.addEventListener('click',()=>{
    //     todoRadio.classList.remove("fa-regular","fa-circle")
    //     todoRadio.classList.add("fa-regular","fa-circle-check")
    //     // todoListCon.append(todoRadio);

    //     todoListItem.style.textDecoration = "line-through";
    //     todoListItem.style.textDecorationColor = "red";
        
    // })

    let isChecked = false; // Flag to track the state of the circle icon

    todoRadio.addEventListener('click', () => {
        if (!isChecked) {
            // Change to tick mark icon
            todoRadio.classList.remove("fa-circle");
            todoRadio.classList.add("fa-check-circle");

            // Apply line-through text decoration
            todoListItem.style.textDecoration = "line-through";
            todoListItem.style.textDecorationColor = "red";

            isChecked = true; // Update the flag
        } else {
            // Change back to circle icon
            todoRadio.classList.remove("fa-check-circle");
            todoRadio.classList.add("fa-circle");

            // Remove line-through text decoration
            todoListItem.style.textDecoration = "none";
            
            isChecked = false; // Update the flag
        }
    });


    todoEl.value="";
    console.log(todoLists)
})