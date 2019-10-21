import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { GoogleChartsModule } from 'angular-google-charts';
//import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { HighchartsChartModule } from 'highcharts-angular';


// import { } from 'highcharts';
// import { HighchartsChartComponent } from 'highcharts-angular';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CommonModule } from '@angular/common';
import { RegHorarioComponent } from './reg-horario/reg-horario.component';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { FacturaClienteComponent } from './facturacion/factura-cliente.component';




//Temporal




@NgModule({
    declarations: [
        DashboardComponent,
        //PagesComponent,
        // HighchartsChartComponent,
        AccountSettingsComponent,
        ProfileComponent,
        UsuariosComponent,
        RegHorarioComponent,
        FacturacionComponent,
        FacturaClienteComponent,
    ],
    exports: [
        DashboardComponent,
        RegHorarioComponent
        //PagesComponent,

    ],
    imports: [
        
          //BrowserAnimationsModule,
        GoogleChartsModule.forRoot(),
      // Ng2GoogleChartsModule,
        ChartsModule,
        ChartModule,
        HighchartsChartModule,
        SharedModule,
        Ng5SliderModule,
        PAGES_ROUTES,
        FormsModule,
        CommonModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
          }),

          ScheduleModule, RecurrenceEditorModule

    ],
    providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService ],
})

export class PagesModule {}
