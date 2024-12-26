const reviewBtn = document.getElementById("review-btn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("modal-btn");
const form = document.querySelector(".modal-form");

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
form.addEventListener("submit", (event) => {
  
  const requiredFields = form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");
  const checkbox = form.querySelector(".accept-box");

  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add("input-error");
    } else {
      field.classList.remove("input-error");
    }
  });

  if (!checkbox.checked) {
    isValid = false;
    checkbox.classList.add("input-error");
  } else {
    checkbox.classList.remove("input-error");
  }

  if (!isValid) {
    event.preventDefault();
    alert("Будь ласка, заповніть усі обов'язкові поля!");
    return;
  }

  emailjs
  .sendForm("service_kkdevin", "template_ltqawl9", form)
  .then(() => {
    alert("Ваше повідомлення надіслано!");
    form.reset(); // Скидає значення форми
    modal.style.display = "none"; // Закриває модальне вікно
  })
  .catch((error) => {
    alert("Сталася помилка. Спробуйте ще раз.");
    console.error("EmailJS Error:", error);
  });
});

(function() {
  emailjs.init("user_l5ZURSoXshmHs7-Fw"); // Замініть на ваш User ID з EmailJS
})();






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



// Завантаження YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Створення плеєра
function onYouTubeIframeAPIReady() {
  new YT.Player('youtube-player', {
    videoId: 'LMPqAMfKakI', // ID вашого відео
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'modestbranding': 1,
      'rel': 0, // Не показувати пов'язані відео
      'showinfo': 0
    }
  });
}