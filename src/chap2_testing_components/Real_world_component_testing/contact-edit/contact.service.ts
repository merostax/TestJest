import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../../../chap1/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private idCounter = 1;

  constructor() {}

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getContact(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find(contact => contact.id === id);
    return of(contact);
  }

  saveContact(contact: Contact): Observable<void> {
    if (contact.id) {
      this.updateContact(contact);
    } else {
      contact.id = this.idCounter++;
      this.contacts.push(contact);
    }
    return of();
  }

  private updateContact(contact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
    }
  }
}