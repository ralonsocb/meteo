import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';


//Temporal
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { AgmCoreModule } from '@agm/core';
import { PAGES_ROUTES } from './pages/pages.routes';
import { ServiceModule } from './services/service.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [

    SharedModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    APP_ROUTES,
   // PAGES_ROUTES,
    //PagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAS6OA2KbEX2AwlJf2ACkPSmEtp3hSkZJ0'
    }),
   ScheduleModule, RecurrenceEditorModule, CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule,
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
