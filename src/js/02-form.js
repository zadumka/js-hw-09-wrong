const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', renderPage);

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = form.elements;

  if (email.value !== '' && message.value !== '') {
    const userData = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    console.log(userData);
  } else {
    return alert('Please fill in all fields before submitting.');
  }
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
});

form.addEventListener('input', event => {
  const { email, message } = event.currentTarget.elements;
  const userData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
});

function renderPage() {
  const lsData = localStorage.getItem(LOCAL_KEY);
  if (lsData) {
    const userData = JSON.parse(lsData);
    const { email, message } = userData;

    const { email: emailInput, message: messageInput } = form.elements;
    emailInput.value = email;
    messageInput.value = message;
  }
}
