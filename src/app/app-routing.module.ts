import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarburantComponent } from './carburant/carburant.component';
import { DriverComponent } from './driver/driver.component';
import { EnumerationComponent } from './enumeration/enumeration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MissionComponent } from './mission/mission.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ProfileComponent } from './profile/profile.component';
import { VehiculeComponent } from './vehicule/vehicule.component';

const routes: Routes = [
  {path: 'enums', component: EnumerationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'mission', component: MissionComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'vehicule', component: VehiculeComponent},
  {path: 'carburant', component: CarburantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'profile', component: ProfileComponent},{
    path        : '**',
    pathMatch   : 'full',
    component   : NotFound404Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
