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