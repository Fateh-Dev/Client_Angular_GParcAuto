import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { EnumerationComponent } from './enumeration/enumeration.component';
import { I18nModule } from './i18n/i18n.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import {
  CustomPaginator,
  DataTableComponent,
} from './SharedComponents/data-table/data-table.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DataSummaryComponent } from './SharedComponents/data-summary/data-summary.component';
import { DataSummaryHeaderComponent } from './SharedComponents/data-summary-header/data-summary-header.component';
import { DataListeHeaderComponent } from './SharedComponents/data-liste-header/data-liste-header.component';
import { MissionComponent } from './mission/mission.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { DriverComponent } from './driver/driver.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DriverTableComponent } from './driver/driver-table/driver-table.component';
import { CarburantComponent } from './carburant/carburant.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartCarburantComponent } from './carburant/bar-chart-carburant/bar-chart-carburant.component';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFound404Component } from './not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    EnumerationComponent,
    DataTableComponent,
    HomePageComponent,
    AboutComponent,
    ParametreComponent,
    DataSummaryComponent,
    DataSummaryHeaderComponent,
    DataListeHeaderComponent,
    MissionComponent,
    VehiculeComponent,
    DriverComponent,
    MaintenanceComponent,
    DriverTableComponent,
    CarburantComponent,
    BarChartCarburantComponent,
    LoginComponent,
    LockComponent,
    ProfileComponent,
    NotFound404Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    I18nModule,
    FlexLayoutModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [
    CookieService,
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
