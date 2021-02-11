import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EnumerationComponent } from './enumeration/enumeration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ParametreComponent } from './parametre/parametre.component';

const routes: Routes = [
  {path: 'enums', component: EnumerationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'parametre', component: ParametreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
