import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './generics/card/card.component';
import { UtilsConvertTemperaturePipe} from './utils/utils-convertTemperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    UtilsConvertTemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
