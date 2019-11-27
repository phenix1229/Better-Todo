const listArr = [];

document.querySelector('.add-todo').addEventListener('click', function(){
    if (inputBox.value !== '' && inputBox.value !== ' '){
        listArr.push(Object.values(createObject()));
        newArrItem = listArr[listArr.length - 1];
        document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = `${newArrItem[0]}\n${newArrItem.slice(1).join(' ')}`;
        markLi();
    inputBox.value = '';
    }
});