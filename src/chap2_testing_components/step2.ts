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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
/*1*/
describe('ContactEditComponent tests', () => {
  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  let rootElement: DebugElement;// we will see a small example of it(my opinion is  its better to stick to function testing rather than rendering testing)
  let contactService: ContactService;
  let router: Router;
  let route: ActivatedRoute;
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
  let contactService: ContactService;
  let router: Router;
  let route: ActivatedRoute;
  // if u have for example a bigger service or u want to add more mocking functions,its better to put it in a seperate
  // file to keep the test as clean and readable as possible
  beforeEach(async () => {
    const contactServiceSpy = {
      getContact: jest.fn(),
      saveContact: jest.fn()
    };
  /*You’ll use a test fake for ContactService so   u can  focus on testing the ContactEditComponent
without worrying about how ContactService works.*/
// in a real word senario services would make http requests so always mock the services 
});
})
/*--------------------------------------------------------------------------------------------------------------*/

/*2*/
describe('ContactEditComponent tests', () => {
  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  let rootElement: DebugElement;
  let contactService: ContactService;
  let router: Router;
  let route: ActivatedRoute;

  // we will be having 2 beforeEach the first one setup the testBed Configuration
  // the second  will set your instance variables
  //You could have just one beforeEach, but your test will be easier to read if you keep them separate.
  beforeEach(async () => {
    const contactServiceSpy = {
      getContact: jest.fn(),
      saveContact: jest.fn()
    };
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([]), // Provide an empty routes configuration so we wont need to define the routes ( note that routerTestingmodule is deprecated )
        ContactEditComponent
      ],
      providers: [
        { provide: ContactService, useValue: contactServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: jest.fn().mockReturnValue('1') } }
          }
        }
      ]
    }).compileComponents();
// as u see here we didnt mock the router since we wanna keep it to test if navigation is happening,because it is used inside the function,note that RouterModule.forRoot([]) is used so adding it wont be nesecarry unless u wanna mock it,
// we do however need to mock activatedRoute, ngoninit need to load a an id in the param,if we for example only using activateRoute , the ngoninit wont work in our test
  })
});

/*--------------------------------------------------------------------------------------------------------------*/

/*3*/
describe('ContactEditComponent tests', () => {
  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  let rootElement: DebugElement;
  let contactService: ContactService;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    const contactServiceSpy = {
      getContact: jest.fn(),
      saveContact: jest.fn()
    };
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([]), 
        ContactEditComponent
      ],
      providers: [
        { provide: ContactService, useValue: contactServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: jest.fn().mockReturnValue('1') } }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootElement = fixture.debugElement;

    contactService = TestBed.inject(ContactService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
// inject is used here ti retrieve that contactService instance, the one we mocked,as well as other providers like router,and activateRouter.
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
  let contactService: ContactService;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    const contactServiceSpy = {
      getContact: jest.fn(),
      saveContact: jest.fn()
    };
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([]), 
        ContactEditComponent
      ],
      providers: [
        { provide: ContactService, useValue: contactServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: jest.fn().mockReturnValue('1') } }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootElement = fixture.debugElement;

    contactService = TestBed.inject(ContactService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });
  describe('init tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();// note that to be truthfuly is not to be true,to be truthfuly is everything that is not null,not undefined...
    });
  });
  
  describe('load contact on init', () => {
    it('should load existing contact on init', () => {
      const contact = { id: 1, name: 'kt'}; // we create a contact that we see if ngoninit is working
      jest.spyOn(contactService, 'getContact').mockReturnValue(of(contact));
  // this is where the magic happens,
  // spyon is a really powerful tool that u ll see often
  // it takes 2 arguments first : object,second : method
  // note that the contactservice here is the one mocked dont switch it up with the real one,
  // however u wanna check the real one to know what to do with it,
  // for example mockreturnvalue will return a value,
// u see we used of--> which we use if we have an observable to return,
// another thing to consider is there is that spyon has mockimplementation that u can mock the whole fucntion,
// if we deal with promises, u wanna use mockResolvedValue(value)
//Shorthand for:jest.fn().mockImplementation(() => Promise.resolve(value));
// mockreturnValue(): jest.fn().mockImplementation(() => value);
// see u can now create ur own mockimplementation 
// check this link for more depth learning,https://jestjs.io/docs/mock-function-api
      
      component.ngOnInit();
      expect(contactService.getContact).toHaveBeenCalledWith(1);
      expect(component.contact).toEqual(contact);
    });
});
          
 

/*--------------------------------------------------------------------------------------------------------------*/

