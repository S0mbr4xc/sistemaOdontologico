import { Routes } from '@angular/router';

import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesComponent } from './Components/services/services.component';



export const routes: Routes = [

    { path: 'login', component: LoginComponentComponent }, // Ruta para el inicio de sesión
    { path: 'register', component: RegisterComponentComponent }, // Ruta para el registro de usuario
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },





];
