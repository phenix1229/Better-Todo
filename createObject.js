const inputBox = document.querySelector('.todo-input')
    const today = new Date();
    // const day = today.getDay();
    // const month = today.getMonth();
    // const date = today.getDate();
    // const year = today.getFullYear();


const createObject = function () {
    const todoStamp = {
        usrInput: inputBox.value,
        day : today.getDay(),
        month : today.getMonth(),
        date : today.getDate(),
        year : today.getFullYear(),

    }
    return todoStamp

}