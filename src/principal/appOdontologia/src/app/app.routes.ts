import { Routes } from '@angular/router';

import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesComponent } from './Components/services/services.component';

// Componentes del usuario normal
import { AppointmentCancelComponent } from './Components/NormalUser/appointment-cancel/appointment-cancel.component';
import { AppointmentSchedulerComponent } from './Components/NormalUser/appointment-scheduler/appointment-scheduler.component';
import { MainComponent } from './Components/NormalUser/main/main.component';
import { MedicalHistoryComponent } from './Components/NormalUser/medical-history/medical-history.component';
import { MyAppointmentsComponent } from './Components/NormalUser/my-appointments/my-appointments.component';
import { SendQueryComponent } from './Components/NormalUser/send-query/send-query.component';
import { ServicesListComponent } from './Components/NormalUser/services-list/services-list.component';
import { UserProfileComponent } from './Components/NormalUser/user-profile/user-profile.component';


export const routes: Routes = [

    { path: 'login', component: LoginComponentComponent }, // Ruta para el inicio de sesión
    { path: 'register', component: RegisterComponentComponent }, // Ruta para el registro de usuario
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'appointmentCancel', component: AppointmentCancelComponent },
    { path: 'appointmentScheduler', component: AppointmentSchedulerComponent },
    { path: 'main', component: MainComponent },
    { path: 'medicalHistory', component: MedicalHistoryComponent },
    { path: 'myAppointments', component: MyAppointmentsComponent },
    { path: 'sendQuery', component: SendQueryComponent },
    { path: 'servicesList', component: ServicesListComponent },
    { path: 'userProfile', component: UserProfileComponent },
    
    






];
