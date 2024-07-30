import { Routes } from '@angular/router';
import { ContactsComponent } from '../chap1/contacts.component';
import { ContactEditComponent } from '../chap2_testing_components/Real_world_component_testing/contact-edit/contact-edit.component';

export const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/edit/:id', component: ContactEditComponent },
  { path: 'contacts/new', component: ContactEditComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];