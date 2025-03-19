import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CapitalizadoPipe } from './pipes/capitalizado.pipe'; // Eliminado import

@NgModule({
  declarations: [
    AppComponent,
    // CapitalizadoPipe // Eliminado de declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }