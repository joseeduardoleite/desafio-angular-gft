import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  form: any;
  emailDB: string = "email@teste.com";
  senhaDB: string = "1234";
  email: string = '';
  senha: string = '';
  mensagem!: string;
  mensagemSenhaInvalida!: string;
  mensagemEmailInvalido!: string;
  mensagemSenhaNull!: string;
  mensagemEmailNull!: string;
  emailStorage: any;
  senhaStorage: any;

  constructor(private formBuilder: FormBuilder) {
    this.criarForm();
  }

  session() {
    this.emailStorage = this.form.get('email').value;
    this.senhaStorage = this.form.get('senha').value;

    localStorage.setItem(this.emailStorage, "email@teste.com");
    localStorage.setItem(this.senhaStorage, "1234");

    localStorage.getItem(this.emailStorage);
    localStorage.getItem(this.senhaStorage);

    if (this.emailStorage != this.emailDB && this.senhaStorage != this.senhaDB) {
      window.location.href="http://localhost:4200/login"
    }
  }

  login() {
    if (this.form.get('email').value != this.emailDB) {
      this.mensagemEmailInvalido = "E-mail inválido"; 
    }

    if (this.form.get('senha').value != this.senhaDB) {
      this.mensagemSenhaInvalida = "Senha inválida";
    }

    if (this.form.get('email').value == "") {
      this.mensagemEmailNull = "Email é de preenchimento obrigatório"
    }

    if (this.form.get('senha').value == "") {
      this.mensagemSenhaNull = "Senha é de preenchimento obrigatório"
    }

    if (this.form.get('email').value == this.emailDB && this.form.get('senha').value == this.senhaDB) {
      this.mensagem = "Login feito com sucesso!";

      this.session()
    }
  }

  act() {
    if (this.form.get('email').value == this.emailDB && this.form.get('senha').value == this.senhaDB) {
      window.location.href="http://localhost:4200/usuarios"
    }
  }


  criarForm() {
    this.form = this.formBuilder.group({
      email: [''],
      senha: ['']
    });
  }
}
