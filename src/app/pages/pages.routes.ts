import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// Declaramos una constante que será un arreglo de las rutas de pages.
const pagesRoutes: Routes = [

    { path: '', component: MainComponent },
    { path: 'dashboard/:codigo', component: DashboardComponent },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);