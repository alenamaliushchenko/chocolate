const reviewBtn = document.getElementById("review-btn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("modal-btn");

// Функція для відкриття модального вікна
reviewBtn.addEventListener('click', () => {
  modal.style.display = "block";
})

// Функція для закриття модального вікна
closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none";
})

// Закриття модального вікна при кліку поза його межами
window.addEventListener('click', (event) => {
  if(event.target === modal) {
    modal.style.display = "none";
  }
})



// Форма підписки
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  if (emailInput.checkValidity()) {
    alert('Форма успішно відправлена!');
    emailInput.value = '';
  } else {
    alert('Будь ласка, введіть коректну електронну пошту!');
  }
});


// для динамічного переключення активної вкладки
document.querySelectorAll('.header-link').forEach(element => {
  element.addEventListener('click', function() {
    document.querySelector('.header-link.active')?.classList.remove('active');
    this.classList.add('active');
  })
});


// для динамічного переключення активної вкладки в footer
document.querySelectorAll('.footer-menu-link').forEach(element => {
  element.addEventListener('click', function() {
    document.querySelector('.footer-menu-link.active')?.classList.remove('active');
    this.classList.add('active');
  })
});