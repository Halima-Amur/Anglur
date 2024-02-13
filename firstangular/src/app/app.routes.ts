import { Routes } from '@angular/router';
import { MainComponent } from '../Component/main/main.component';
import { SidebarComponent } from '../Component/sidebar/sidebar.component';

export const routes: Routes = 
[{ path: 'Home', component: MainComponent }, 
{ path: 'sidebar', component: SidebarComponent }] ;
