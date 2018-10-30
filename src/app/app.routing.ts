import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TravelComponent } from './components/travel/travel.component';
import { BusComponent } from './components/bus/bus.component';
import { UserComponent } from './components/user/user.component';

const router: Routes = [
    { 
        path: '', component: HomeComponent, canActivate: [AuthGuard], 
        children: [
            { path: 'trips', component: TravelComponent },
            { path: 'buses', component: BusComponent },
            { path: 'users', component: UserComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRouters: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(router);