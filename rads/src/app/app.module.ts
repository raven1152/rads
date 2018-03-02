import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

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
import { CommReceiverService } from './services/comm-receiver/comm-receiver.service';

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
  ],
  providers: [
    HttpClientModule,
    UserConfigService,
    ApplicationConfigService,
    SessionStateService,
    AbstractService,
    JobService,
    CommService,
    CommReceiverService,
  ],
  entryComponents: [
    ContentContainerComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
