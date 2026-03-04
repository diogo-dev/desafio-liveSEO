// Objeto para armazenar os valores dos inputs 
const formData = {
  name: '',
  email: '',
  password: ''
};

// Inputs
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');

// Adicionar listeners para capturar o disparo de eventos
if (nameInput) {
  nameInput.addEventListener('input', (e) => formData.name = e.target.value );
}

if (emailInput) {
  emailInput.addEventListener('input', (e) => formData.email = e.target.value );
}

if (passwordInput) {
  passwordInput.addEventListener('input', (e) => formData.password = e.target.value );
}

// SVGs dos ícones de Eye Open e Eye Closed
const eyeOpenSVG = `
  <svg class="eye-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
`;

const eyeClosedSVG = `
  <svg class="eye-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
`;

// Toggle para mostrar/ocultar senha
const toggleEye = document.getElementById('toggleEye');

if (toggleEye) {
  toggleEye.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleEye.innerHTML = eyeOpenSVG;
    } else {
      passwordInput.type = 'password';
      toggleEye.innerHTML = eyeClosedSVG;
    }
  });
}

// Handle Submit 
const form = document.querySelector('.form-container');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    console.log('Form Data:', formData);
  });
}