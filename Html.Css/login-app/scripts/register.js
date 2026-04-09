const registerForm = document.getElementById('registerForm');
const alertDiv = document.getElementById('alert');

function showAlert(message, type = 'error') {
    alertDiv.innerHTML = message;
    alertDiv.className = `alert ${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 5000);
}

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validações
    if (!name || !email || !password || !confirmPassword) {
        showAlert('Preencha todos os campos!');
        return;
    }
    
    if (password.length < 6) {
        showAlert('Senha deve ter pelo menos 6 caracteres!');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('As senhas não coincidem!');
        return;
    }
    
    if (window.mockUsers[email]) {
        showAlert('Este email já está cadastrado!');
        return;
    }
    
    // Cria usuário
    window.mockUsers[email] = {
        password: password,
        name: name
    };
    
    window.saveUsers();
    
    showAlert(`✅ Conta criada com sucesso, ${name}! <a href="index.html">Faça login agora</a>`, 'success');
});