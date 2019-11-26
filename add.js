document.querySelector('.add-todo').addEventListener('click', function(){
    
    const listArr = [];
    if (inputBox.value !== '' && inputBox.value !== ' '){
    listArr.push(Object.values(createObject()));
    for (const item of listArr){
        document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = item.join(' ');
    }
    inputBox.value = '';
    }
});

