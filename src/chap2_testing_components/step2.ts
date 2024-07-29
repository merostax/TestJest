import { DebugElement } from '@angular/core';
import { ContactEditComponent } from './Real_world_component_testing/contact-edit/contact-edit.component';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Contact } from '../chap1/contacts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactService } from './Real_world_component_testing/contact-edit/contact.service';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
  // if u have for example a bigger service or u want to add more mocking functions,its better to put it in a seperate
  // file to keep the test as clean and readable as possible
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
      imports: [NoopAnimationsModule, FormsModule,RouterModule.forRoot([])],// note that RouterTestingModule is deprecated,
      // so angular has moved to routerModule check this link,https://v17.angular.io/api/router/testing/RouterTestingModule
      providers: [{ provide: ContactService, useValue: contactServiceStub }],
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

/*--------------------------------------------------------------------------------------------------------------*/

/*3*/
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
      imports: [NoopAnimationsModule, FormsModule,RouterModule.forRoot([])],
      providers: [{ provide: ContactService, useValue: contactServiceStub }],
    }).compileComponents();
  });
// as you saw we didnt add in the providers the activateRoute and Router since routerModule take care of that,
// if u do wanna use them u wanna mock them like the one in the providers
// a small example:
/*provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }), // Mocking the route parameters
          }, */
          
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootElement = fixture.debugElement;
  });
  //The fixture variable stores the component-like object from the TestBed.createComponent method that you can use for debugging and testing, which we mentioned earlier.
  // The component variable holds a component that you get from your fixture using the componentInstance property
  // so what is this fixture.detectChanges?
  /*
The detectChanges method triggers a change-detection cycle for the component; you
need to call it after initializing a component or changing a data-bound property value.
After calling detectChanges, the updates to your component will be rendered in the
DOM. */
});

/*--------------------------------------------------------------------------------------------------------------*/

/*4*/
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
      imports: [NoopAnimationsModule, FormsModule,RouterModule.forRoot([])],
      providers: [{ provide: ContactService, useValue: contactServiceStub }],
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
