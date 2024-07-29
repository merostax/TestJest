import { DebugElement } from '@angular/core';
import { ContactEditComponent } from './Real_world_component_testing/contact-edit/contact-edit.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from '../chap1/contacts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactService } from './Real_world_component_testing/contact-edit/contact.service';
import { FormsModule } from '@angular/forms';
/*1*/
describe('ContactEditComponent tests', () => {
  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  let rootElement: DebugElement;
  //fixture :Stores an instance of the ComponentFixture, which contains methods that help you debug and test a component
  //component:Stores an instance of the ContactEditComponent
  //rootElement—Stores the DebugElement for your component, which is how you’ll access its children
});

/*--------------------------------------------------------------------------------------------------------------*/

/*2*/
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
  /*You’ll use a test fake for ContactService because the real ContactService makes
HTTP calls, which would make your tests harder to run and less deterministic. Also,
faking ContactService allows you to focus on testing the ContactEditComponent
without worrying about how ContactService works.*/
});

/*--------------------------------------------------------------------------------------------------------------*/

/*2*/
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
// we will be having 2 beforeEach the first one setup the testBed Configuration
// the second  will set your instance variables
//You could have just one beforeEach, but your test will be easier to read if you keep them separate.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactEditComponent], //note that if the component is a standalone=true, instead of adding it in the declaration u need to add it in the imports
      imports: [NoopAnimationsModule,FormsModule,],
      providers: [{ provide: ContactService, useClass: contactServiceStub }],
    }).compileComponents();
    
// note that async and await are for Angular testing environment to fully be configured before running any tests
    /*TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
      entryComponents: [InvalidEmailModalComponent]
      } */
      // this is an example hence we wont use it, however is good to know it
      //You use overrideModule in this case because you need the modal dialog tobe loaded lazily. 
      //Lazy loading means that the dialogs won’t be loaded until the user performs an action to cause them to load.

  });
});
