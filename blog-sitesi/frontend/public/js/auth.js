
function renderAuthButtons() {
  const authDiv = document.getElementById('auth-buttons');
  const token = localStorage.getItem('authToken');
  
  if (token) {
    authDiv.innerHTML = `
      <a href="/profile" class="user-btn">
        <i class="fas fa-user"></i> Kullanıcı
      </a>
    `;
  } else {
    authDiv.innerHTML = `
      <a href="/auth/login.html" class="login-btn">Giriş Yap</a>
    `;
  }
}

function loadPartials() {
  fetch('/html/partials/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('navbar').innerHTML = html;
      renderAuthButtons();
    });
  
  fetch('/html/partials/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    });
}

document.addEventListener('DOMContentLoaded', loadPartials);