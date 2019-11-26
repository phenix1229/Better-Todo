const markLi = function () {
    document.querySelectorAll('.todo-list > li').forEach(item => {item.addEventListener('click', function () {item.classList.add('complete')})});
}
