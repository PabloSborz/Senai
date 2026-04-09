const loginForm = document.getElementById('loginForm');
const alertDiv = document.getElementById('alert');

function showAlert(message, type = 'error') {
    alertDiv.textContent = message;
    alertDiv.className = `alert ${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 4000);
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        showAlert('Por favor, preencha todos os campos!');
        return;
    }

    if (password.length < 6) {
        showAlert('A senha deve ter pelo menos 6 caracteres!');
        return;
    }

    // Verifica login
    if (window.mockUsers[email] && window.mockUsers[email].password === password) {
        showAlert(`Bem-vindo, ${window.mockUsers[email].name}! 🎉`, 'success');
        
        // Salva login (simulação)
        if (document.getElementById('remember').checked) {
            localStorage.setItem('loggedUser', email);
        }
        
        setTimeout(() => {
            alert('Redirecionando para dashboard...');
            // window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        showAlert('Email ou senha incorretos!');
    }
});

// Hint para testes
document.getElementById('email').addEventListener('focus', function() {
    if (!this.value) {
        this.placeholder = 'user@teste.com (senha: 123456)';
    }
});