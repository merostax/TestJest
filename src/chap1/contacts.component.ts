import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactService } from '../chap2_testing_components/Real_world_component_testing/contact-edit/contact.service';
import { Contact } from './contacts/contact.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts: Contact[] = [];
  constructor() {}
 /* constructor(private contactService: ContactService) {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
  */
}
