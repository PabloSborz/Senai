// Banco de dados simulado (persistente com localStorage)
let mockUsers = JSON.parse(localStorage.getItem('mockUsers')) || {
    'user@teste.com': {
        password: '123456',
        name: 'João Silva'
    },
    'admin@admin.com': {
        password: 'admin123',
        name: 'Administrador'
    }
};

// Salva no localStorage sempre que modificar
function saveUsers() {
    localStorage.setItem('mockUsers', JSON.stringify(mockUsers));
}

// Exporta para uso global
window.mockUsers = mockUsers;
window.saveUsers = saveUsers;