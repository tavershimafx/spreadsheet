import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: "", component: AppComponent, loadChildren: () => import("./app.module").then(k => k.AppModule) }
];
