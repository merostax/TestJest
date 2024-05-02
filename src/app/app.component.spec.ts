import { AppComponent } from './app.component';
 describe('appComponent',()=>{
let fixture:AppComponent;
beforeEach(()=>{
fixture= new AppComponent();
})
it('should have a title jestTest',()=>{
  expect(fixture.title).toEqual('jestTest')
})
 })