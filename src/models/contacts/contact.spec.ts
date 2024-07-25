import ContactClass from './contact';

describe('Contact class tests', () => {
  let contact: ContactClass | null; //Declares the contact variable as a ContactClass type
  beforeEach(() => {
    //Executes beforeEach function before each test case
    contact = new ContactClass();
  });
  it('should have a valid constructor', () => {
    //Tests the contact not to be null
    expect(contact).not.toBeNull();
  });
  afterEach(() => {
    //Executes afterEach function after each test case
    contact = null;
  });
});

describe('Contact class tests', () => {
  let contact: ContactClass | null; //Declares the contact variable as a ContactClass type
  beforeEach(() => {
    //Executes beforeEach function before each test case
    contact = new ContactClass();
  });
  it('should have a valid constructor', () => {
    //Tests the contact not to be null
    expect(contact).not.toBeNull();
  });
  it('should set name correctly through constructor', () => {
    contact = new ContactClass('barthauer');
    expect(contact.name).toEqual('barthauer');
  });
  
  afterEach(() => {
    //Executes afterEach function after each test case
    contact = null;
  });
});
