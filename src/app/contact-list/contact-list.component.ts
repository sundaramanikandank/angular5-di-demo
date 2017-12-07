import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList : any;
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    this._contactService.getContactInfo()
      .subscribe(resContactList => this.contactList = resContactList)
  }

}
