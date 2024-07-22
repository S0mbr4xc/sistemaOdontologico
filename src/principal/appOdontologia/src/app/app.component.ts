import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponentComponent } from "./Components/login-component/login-component.component";
import { RegisterComponentComponent } from "./Components/register-component/register-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appOdontologia';

  showLoginModal = false;
  showRegisterModal = false;

  openLogin() {
    this.showLoginModal = true;
  }

  // Cierra el modal de inicio de sesión
  closeLogin() {
    this.showLoginModal = false;
  }

  // Abre el modal de registro
  openRegister() {
    this.showRegisterModal = true;
  }

  // Cierra el modal de registro
  closeRegister() {
    this.showRegisterModal = false;
  }

  

}
