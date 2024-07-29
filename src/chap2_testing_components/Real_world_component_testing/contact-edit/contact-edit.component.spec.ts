import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Contact } from '../../../chap1/contacts';
import { ContactEditComponent } from './contact-edit.component';
import { ContactService } from './contact.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { RouterModule } from '@angular/router';


describe('ContactEditComponent tests', () => {
    let fixture: ComponentFixture<ContactEditComponent>;
    let component: ContactEditComponent;
    let rootElement: DebugElement;
  
    const contactServiceStub = {
      contact: {
        id: 1,
        name: 'kt',
      },
  
      save: async function (contact: Contact) {
        component.contact = contact;
      },
  
      getContact: async function () {
        component.contact = this.contact;
        return this.contact;
      },
  
      updateContact: async function (contact: Contact) {
        component.contact = contact;
      },
    };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ContactEditComponent],
        imports: [NoopAnimationsModule, FormsModule,RouterModule.forRoot([]),],
        providers: [{ provide: ContactService, useValue: contactServiceStub },
            ]
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ContactEditComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      rootElement = fixture.debugElement;
    });
  
    describe('saveContact() test', () => {
      it('should display contact name after contact set', fakeAsync(() => {
        const contact = {
          id: 1,
          name: 'kt1',
        };
        component.saveContact(contact);
        fixture.detectChanges();
        const nameInput = rootElement.query(By.css('#name'));
        tick();
        expect(nameInput.nativeElement.value).toBe('kt1');
      }));
    });
  });
  