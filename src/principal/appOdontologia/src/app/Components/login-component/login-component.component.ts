import { CommonModule, Location} from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {
  @Output() close = new EventEmitter<void>();


  constructor(private location: Location) {}

  email: string = '';
  password: string = '';

  // Método para cerrar el modal
  closeLogin() {
    this.close.emit();
  }

  // Método para manejar el inicio de sesión
  login() {
    // Implementar la lógica de inicio de sesión aquí
    console.log(`Email: ${this.email}, Password: ${this.password}`);
  }

  goBack() {
    this.location.back();
  }

}
