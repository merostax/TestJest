
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ContactEditComponent } from './contact-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';
import { DebugElement } from '@angular/core';

describe('ContactEditComponent', () => {
  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  //let rootElement: DebugElement;
  
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
        RouterModule.forRoot([]), ContactEditComponent
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

  beforeEach(async () => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    //rootElement = fixture.debugElement;
    contactService = TestBed.inject(ContactService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });
describe('init tests', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('load contact on init', () => {
  it('should load existing contact on init', () => {
    const contact = { id: 1, name: 'kt'};
    jest.spyOn(contactService, 'getContact').mockReturnValue(of(contact));

    component.ngOnInit();

    expect(contactService.getContact).toHaveBeenCalledWith(1);
    expect(component.contact).toEqual(contact);
  });

  it('should not load contact if id is not present', () => {
    jest.spyOn(route.snapshot.paramMap, 'get').mockReturnValue(null);
    component.ngOnInit();
    expect(contactService.getContact).not.toHaveBeenCalled();
  });
});

describe('save contact', () => {
  it('should save new contact and navigate to /contacts', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    jest.spyOn(contactService, 'saveContact').mockReturnValue(of(undefined));
    component.contact = { id: 1, name: 'kt'};
    component.save();

    expect(contactService.saveContact).toHaveBeenCalledWith(component.contact);
    expect(navigateSpy).toHaveBeenCalledWith(['/contacts']);
  });

  it('should not save contact if it is invalid', () => {
    component.contact = null;
    component.save();
    expect(contactService.saveContact).not.toHaveBeenCalled();
  });
});

describe('update contact', () => {
  it('should update existing contact and navigate to /contacts', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    jest.spyOn(contactService, 'saveContact').mockReturnValue(of(undefined));

    component.contact = { id: 1, name: 'kt' };
    component.save();

    expect(contactService.saveContact).toHaveBeenCalledWith(component.contact);
    expect(navigateSpy).toHaveBeenCalledWith(['/contacts']);
  });

  it('should not update contact if it is invalid', () => {
    component.contact = null;
    component.save();
    expect(contactService.saveContact).not.toHaveBeenCalled();
  });
});
});

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