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
      // this is direkt call to the ngOninit

      const ngOnInitMethod = component['ngOnInit'];
      ngOnInitMethod.call(component);
      // u may however going to be relying on the second one sometimes since it provides 
      // more flexibility as well as dynamic calling
      // which is in term short for component['ngOnInit']();
      expect(contactService.getContact).toHaveBeenCalledWith(1);
        // toHaveBeenCalledWith(1), since contact has id of 1      
      expect(component.contact).toEqual(contact);
      // in the load the contact will later be set to this.contact=contact so we should expect that at latest
    });

    it('should not load contact if id is not present', () => {
      jest.spyOn(route.snapshot.paramMap, 'get').mockReturnValue(null);
      // like mentioned try ur best to have at least 2 tests one for it should
      // the other it should not,u can create alot of cases depending on ur input and ouput,
      // in here since in ngonit it checks the id if its true,if not it does nothing,so the contactservice should
      // not be called since the interne function of ngOninit is not completed,
      // however is it a good practice in ur own function to add exceptions, like try catch, errorHanfler,if else, to cover
      // the cases when something not being properly given or loaded,
      component.ngOnInit();
      expect(contactService.getContact).not.toHaveBeenCalled();
    });
});
describe('save contact', () => {
  it('should save new contact and navigate to /contacts', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    // in writing a tests,for a function always look for what is the latest thing that will
    // be called, so basically example u have alot of if,else which is for testing 
    // not a good idea to have alot of them,but lets break it down for a sec.
    // u want always to ignore if(),for(),while(), and so on,because we want to ensure that
    // we get to the inside of code and not worrin about if is true or not,
    // the second thing , if there is 2 if and 2 elseif,this will create alot of cases,
    // 2!,so 4 tests, 4! however  is 4*3*2*1, the number will get higher the more u have,
    // and in that case u cant cover them all, try to have as minimum as possible,
    // as well as having to do some object orientierung, which will create more functions,
    // that calls each other in a clean way and the testing will be happy
    jest.spyOn(contactService, 'saveContact').mockReturnValue(of(undefined));
    component.contact = { id: 1, name: 'kt'};
    component.save();

    expect(contactService.saveContact).toHaveBeenCalledWith(component.contact);
    expect(navigateSpy).toHaveBeenCalledWith(['/contacts']);
  });
})
          
 /*describe('saveContact() test', () => {
it('should display contact name after contact set', fakeAsync(() => {
 component.contact = { id: 1, name: 'kt' };
 component.save();
fixture.detectChanges();
const nameInput = rootElement.query(By.css('#name'));
tick();
expect(nameInput.nativeElement.value).toBe('kt');
}));
});
*/// show an example in selenium

/*--------------------------------------------------------------------------------------------------------------*/

