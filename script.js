const monthly = document.getElementById('radio')
const annually = document.getElementById('radio2')
const cards = document.querySelectorAll('.card');

monthly.addEventListener('change', validateForm);
annually.addEventListener('change', validateForm);


function validateForm() {
   if (annually.checked) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('annually');
    }
    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('annually');
    }
}
}