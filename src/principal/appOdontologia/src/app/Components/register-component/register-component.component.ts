import { CommonModule, Location} from '@angular/common';
import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.scss'
})
export class RegisterComponentComponent {

  @Output() close = new EventEmitter<void>();
  email:string = '';
  password:string = '';

  constructor(private location: Location) {}

  closeRegister() {
    this.close.emit();
  }

  register() {

  }

  goBack() {
    this.location.back();
  }


}
