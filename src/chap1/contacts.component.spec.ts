import { Contact } from './contacts/contact.model';
import { ContactsComponent } from './contacts.component';

describe('ContactsComponent Tests', () => {
  let contactsComponent: ContactsComponent;
  beforeEach(() => {
    contactsComponent = new ContactsComponent();
  });
  it('should set instance correctly', () => {
    expect(contactsComponent).not.toBeNull();
  });
  it('should be no contacts if there is no data', () => {
    expect(contactsComponent.contacts.length).toBe(0);
  });
  it('should be contacts if there is data', () => {
    const newContact: Contact = {
      id: 1,
      name: 'kt',
    };
    const contactsList: Array<Contact> = [newContact];
    contactsComponent.contacts = contactsList;
    expect(contactsComponent.contacts.length).toBe(1); //Assertion to test that if one contact is added, then the number of contacts inthe contact array should be 1
  });
});
