document.getElementById('add-button').addEventListener('click', function () {
    const add = document.getElementById('phone-increment');
    const value = add.value;
    add.value = parseInt(value) + 1;
})