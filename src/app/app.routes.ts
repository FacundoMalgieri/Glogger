import { Routes, RouterModule } from '@angular/router';
import { SuitesComponent } from "./components/suites/suites.component";
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from "./components/home/home.component";
import { SuiteComponent } from "./components/suite/suite.component";

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: MainComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'suites', component: SuitesComponent },
            { path: 'suite/:id', component: SuiteComponent }
        ]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

export const AppRoutes = RouterModule.forRoot(routes);
