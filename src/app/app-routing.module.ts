
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { ContactDataComponent } from './contact-data/contact-data.component';

import {ContactListComponent} from './contact-list/contact-list.component';

const routes : Routes = [
  {path:'contact-data', component: ContactDataComponent},
  {path:'contact-list', component: ContactListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

