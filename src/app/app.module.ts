import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { GridModule } from '@progress/kendo-angular-grid';
import {MatButtonModule} from '@angular/material/button';
import { ServicesService } from './services.service'
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule,
    // MatButtonModule,
    // MatCheckboxModule
  ], 
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
