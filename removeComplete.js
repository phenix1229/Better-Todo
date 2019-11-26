document.querySelector('.remove-complete').addEventListener('click', function(){
    const todoList = document.querySelector('.todo-list'); 
    const listArr = [];
    document.querySelectorAll('.complete').forEach(item => {
        todoList.removeChild(item);
    });
})