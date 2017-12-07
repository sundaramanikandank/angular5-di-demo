import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactService} from './contacts.service';

import { ContactDataComponent } from './contact-data/contact-data.component';
import {ContactListComponent} from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDataComponent,
    ContactListComponent

 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
