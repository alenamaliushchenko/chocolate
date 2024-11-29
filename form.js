const modalForm = document.querySelector('.modal-form');

function formInfo(e){
  e.preventDefault();

  const userName = e.target.elements.user_name.value;
  const userEmail = e.target.elements.user_email.value
  console.log(`User name: ${userName}`);
  console.log(`User email: ${userEmail}`);

}

modalForm.addEventListener('submit', formInfo);
