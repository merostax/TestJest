import { Component } from '@angular/core';
import { Contact } from './contacts/contact.model';


@Component({
  selector: 'app-contacts',
  template: " ",
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Contact[] = [];


  constructor() {}
}