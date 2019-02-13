import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './login/login.component';



import { SpecialEventsComponent } from './special-events/special-events.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import{ FormsModule} from '@angular/forms'
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenIntercpService } from './token-intercp.service';



//import './polyfills';


import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { RegisterComponent } from './register/register.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component'




@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
  
  
    SpecialEventsComponent,
  
  
    RegisterComponent,
  
  
    ChartComponent,
    
  
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ChartsModule


  ],
  providers: [ AuthService,EventService,AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:TokenIntercpService,multi:true}],
  bootstrap: [AppComponent,SpecialEventsComponent],
  entryComponents: [SpecialEventsComponent ],


})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
