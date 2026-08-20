import { Service } from '@angular/core';
import { LoginInt } from './login-int';


@Service()
export class LoginService {

loginUsuario = (credenciais: LoginInt) => credenciais.email === 'admin@gmail.com' && credenciais.senha === '12345';

}
