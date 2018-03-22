import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TableModule } from 'primeng/table';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { UserConfigService } from './services/user-config/user-config.service';
import { ApplicationConfigService } from './services/application-config/application-config.service';
import { SessionStateService } from './services/session-state/session-state.service';
import { FacilityHomeComponent } from './dashboards/facility/facility-home.component';
import { ItHomeComponent } from './dashboards/it/it-home.component';
import { GuestHomeComponent } from './dashboards/guest/guest-home.component';
import { AbstractService } from './services/abstract/abstract.service';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { NotFoundComponent } from './dashboards/not-found/not-found.component';
import { SalesHomeComponent } from './dashboards/sales/sales-home.component';
import { EngineeringHomeComponent } from './dashboards/engineering/engineering-home.component';
import { DraftingHomeComponent } from './dashboards/drafting/drafting-home.component';
import { JobService } from './services/job/job.service';
import { FinanceHomeComponent } from './dashboards/finance/finance-home.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { ContainerDirective } from './directives/container.directive';
import { CommConsoleComponent } from './components/comm-console/comm-console.component';
import { CommService } from './services/comm/comm.service';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { QualityHomeComponent } from './dashboards/quality/quality-home.component';
import { HeadersHomeComponent } from './dashboards/headers/headers-home.component';
import { FramesHomeComponent } from './dashboards/frames/frames-home.component';
import { ShippingHomeComponent } from './dashboards/shipping/shipping-home.component';
import { TubesHomeComponent } from './dashboards/tubes/tubes-home.component';
import { FinsHomeComponent } from './dashboards/fins/fins-home.component';
import { CarService } from './services/car/car.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardLayoutComponent,
    FacilityHomeComponent,
    ItHomeComponent,
    GuestHomeComponent,
    ChartContainerComponent,
    NotFoundComponent,
    SalesHomeComponent,
    EngineeringHomeComponent,
    DraftingHomeComponent,
    FinanceHomeComponent,
    ContentContainerComponent,
    ContainerDirective,
    CommConsoleComponent,
    LoginLayoutComponent,
    QualityHomeComponent,
    HeadersHomeComponent,
    FramesHomeComponent,
    ShippingHomeComponent,
    TubesHomeComponent,
    FinsHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    NgxChartsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    TableModule,
  ],
  providers: [
    HttpClientModule,
    UserConfigService,
    ApplicationConfigService,
    SessionStateService,
    AbstractService,
    JobService,
    CommService,
    CarService,
  ],
  entryComponents: [
    ContentContainerComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
