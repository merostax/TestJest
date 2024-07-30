import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../../chap1/contacts';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-edit.component.html',
})
export class ContactEditComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contactService.getContact(id).subscribe(existingContact => {
        this.contact = existingContact || null;
      });
    }
  }

  save(): void {
    if (this.contact) {
      this.contactService.saveContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
