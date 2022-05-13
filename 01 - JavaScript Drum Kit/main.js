const buttons = document.querySelectorAll('.key');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        button.classList.add('playing');
    });
});