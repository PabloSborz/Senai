import { Component, signal } from '@angular/core';
import { LoginInt } from './login-int';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    protected loginModel = signal<LoginInt>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {
    required(s.email, {message: 'O email é obrigatório'});
    email(s.email, {message: 'O email não condiz com um email'});

    required(s.senha, {message: 'Senha é obrigatória'})
  });


  protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    alert('Foi feito o submit')
    const login = this.loginModel();

    if (login.email === 'admin@gmail.com' && login.senha === '12345') {
      this.estaLogado.set(true);
    }
    
    this.loginForm().reset();
  }
  

}
