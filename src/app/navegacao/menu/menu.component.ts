import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  constructor() { }

  func() {
    let login!: LoginComponent;
    login.session();
  }
}
