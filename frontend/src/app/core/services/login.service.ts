import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  //returns an Observable with a dummy user object
  dummyLogin(username: string, password: string) {
    if (username === 'lol' && password === 'lil') {
      const dummyUser = { id: 1, username: 'lol', password: 'lil' };
      return of(dummyUser);
    }
    return;
  }

  getDummyData(): Observable<any> {
    const data = {
      title: 'My Dummy Data',
      description: 'This is some dummy data.',
    };
    return of(data);
  }
}
