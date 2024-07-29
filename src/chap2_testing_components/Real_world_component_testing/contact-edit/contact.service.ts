import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Contact } from '../../../chap1/contacts';

@Injectable()
export class ContactService {
  private contactsUrl = 'app/contacts';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<Contact[]> {
    return this.http.get<{ data: Contact[] }>(this.contactsUrl)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

    public getContact(id: number): Observable<Contact> {
      return this.getContacts()
        .pipe(
          map(contacts => {
            const contact = contacts.find(contact => contact.id === id);
            if (!contact) {
              throw new Error(`Contact with id ${id} not found`);
            }
            return contact;
          }),
          catchError(this.handleError)
        );
    }

  public save(contact: Contact): Observable<Contact> {
    if (contact.id) {
      return this.put(contact);
    }
    return this.post(contact);
  }

  public new(contact: Contact): Observable<Contact> {
    return this.post(contact);
  }

  public delete(contact: Contact): Observable<null> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http.delete(url, { headers: this.headers })
      .pipe(
        map(() => null),
        catchError(this.handleError)
      );
  }

  public post(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  public put(contact: Contact): Observable<Contact> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http.put(url, contact, { headers: this.headers })
      .pipe(
        map(() => contact),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }
}
