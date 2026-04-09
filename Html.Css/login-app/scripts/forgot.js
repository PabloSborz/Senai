const forgotForm = document.getElementById('forgotForm');
const alertDiv = document.getElementById('alert');

function showAlert(message, type = 'error') {
    alertDiv.textContent = message;
    alertDiv.className = `alert ${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 4000);
}

forgotForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    
    if (!email) {
        showAlert('Digite seu email!');
        return;
    }

    if (window.mockUsers[email]) {
        showAlert(`✅ Link de recuperação enviado para ${email}! Verifique sua caixa de entrada.`, 'success');
    } else {
        showAlert(`Email não encontrado. <a href="register.html">Crie uma conta</a>?`, 'error');
    }
});