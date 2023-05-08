import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table'
import {InputTextModule} from 'primeng/inputtext';
import {TreeTableModule} from 'primeng/treetable';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LawyerService } from './lawyer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card'
import {TimelineModule} from 'primeng/timeline';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgMarqueeModule } from 'ng-marquee';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import {ListboxModule} from 'primeng/listbox';
import {OrderListModule} from 'primeng/orderlist';
import {PanelModule} from 'primeng/panel';
import { interval } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalenderComponent,
    DashboardComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    ConfirmDialogModule,
    ListboxModule,
    InputNumberModule,
    RadioButtonModule,
    PanelModule,   
    RatingModule,
    ToolbarModule,
    DropdownModule,
    DialogModule,
    ProgressBarModule,
    ButtonModule,
    OrderListModule,
    ContextMenuModule,
    TabMenuModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    TreeTableModule,
    HttpClientModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    CardModule,TimelineModule,
    FullCalendarModule,
    NgMarqueeModule,
    
    


  ],
  providers: [LawyerService, MessageService, ConfirmationService, DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
