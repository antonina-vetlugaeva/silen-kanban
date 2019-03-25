var btn = document.querySelector('.delete-button'),
modal = document.querySelector('.modal'),
closeBtn = document.querySelector('.closeBtn');



function showModal() {
 modal.style.display = 'flex';
 btn.removeEventListener('click', showModal);
}

btn.addEventListener('click', showModal);




closeBtn.addEventListener('click', function () {
  modal.style.display = "none";
})

window.addEventListener('click', function (e) {
  if(e.target == modal) {
      modal.style.display = "none";
  }
})
