document.querySelector('.add-todo').addEventListener('click', function(){
    const inputBox = document.querySelector('.todo-input');
    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();
    const listArr = [];
    if (inputBox.value !== '' && inputBox.value !== ' '){
    listArr.push(inputBox.value);
    for (const item of listArr){
        document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = item;
    }
    inputBox.value = '';
    }
});