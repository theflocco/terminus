import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminAddComponent } from './termin-add/termin-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TerminShareViewComponent } from './termin-share-view/termin-share-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminAddComponent,
    TerminShareViewComponent
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
