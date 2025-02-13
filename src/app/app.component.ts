import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { CreditsComponent } from './components/credits/credits.component';
import { LenguageComponent } from './components/lenguage/lenguage.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'regulations', component: RegulationsComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'lenguage', component: LenguageComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'profile', component: ProfileComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaFebrero2025SRS';
}
