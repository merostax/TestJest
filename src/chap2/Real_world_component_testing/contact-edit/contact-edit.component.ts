import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../../../chap1/contacts/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-edit',
  template: " ",
})
export class ContactEditComponent implements OnInit {
  public isLoading = true;
  public contact?: Contact ;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadContact();
  }


  public saveContact(contact: Contact) {
    contact.favorite = !contact.favorite;
    this.contactService.save(contact);
  }

  public loadContact(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.contactService.getContact(id)
        .subscribe(contact => {
          this.isLoading = false;
          this.contact = contact;
      });
    });
  }

  public updateContact(contact: Contact): void {
    this.contactService.save(contact)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
  }  
}
