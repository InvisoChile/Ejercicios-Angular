import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { xmlParserComponent } from './xml-parser/xml-parser.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Nota: Siempre se debe importar HttpClientModule despues´de BrowserModule
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    xmlParserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
