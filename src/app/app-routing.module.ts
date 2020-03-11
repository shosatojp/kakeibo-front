import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopComponent } from './top/top.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'calendar/:year/:month',
        component: CalendarComponent,
    },
    {
        path: 'calendar',
        component: CalendarComponent,
    },
    {
        path: '',
        component: TopComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
