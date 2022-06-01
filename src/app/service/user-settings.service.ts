import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { userSetting } from '../model/userSettings';
import { observable, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  private url ="http://localhost:8080/api/userData";
  constructor(private http: HttpClient) { }


saveUserData(formData:userSetting) : Observable<any>
 {
  return this.http.post("http://localhost:8080/api/userData",formData);
}


getSubscriptinTypes(): Observable<string[]> | undefined {
  return of (['monthly','quartherly','semi-annually','annualy']);
}


getAllUsers(): Observable<userSetting[]>
{
  return this.http.get<userSetting[]>(this.url)
}
}
