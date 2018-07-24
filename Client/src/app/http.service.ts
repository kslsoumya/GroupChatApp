import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpParams, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public _http: HttpClient, public cookieService: CookieService) { }

  public signUp(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password);
    return (this._http.post(`api/v1/users/signup`, params));
  }

  public signIn(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
    return (this._http.post(`api/v1/users/login`, params));
  }


  public pwdService = (data) => {
    return this._http.put(`api/v1/users/forgotPwd`, data);
  }

  public getGroups = (userId) => {
    return this._http.get(`api/v1/group/get/${userId}?authToken=${this.cookieService.get('authToken')}`);
  }

  public getSingleGroup = (groupId) => {
    return this._http.get(`api/v1/group/get_group/${groupId}?authToken=${this.cookieService.get('authToken')}`);
  }

  public getActiveGroupsService = (userId) => {
    return this._http.get(`api/v1/group/get/active/${userId}?authToken=${this.cookieService.get('authToken')}`);
  }

  public groupCreation = (data) => {
    data.authToken = this.cookieService.get('authToken');
    console.log(data);
    return this._http.post(`api/v1/group/create`, data);
  }

  public changeGroupDetail = (id, data) => {
    return this._http.put(`api/v1/group/edit/${id}?authToken=${this.cookieService.get('authToken')}`, data);
  }

  public getPreviousChat = (id, pages) => {
    const  authToken = this.cookieService.get('authToken');
     return this._http.get(`api/v1/chat/get/group_chat/${id}/${pages}?authToken=${authToken}`);
  }

  public deleteGroup = (id) => {
    const data = {
      authToken: this.cookieService.get('authToken')
    };
    return this._http.post(`api/v1/group/delete/${id}`, data);

  }

  public logOutFunction(): Observable<any> {
    const params = new HttpParams()
      .set('authToken', this.cookieService.get('authToken'));
    return (this._http.post(`api/v1/users/logout`, params));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    } // end condition *if
    console.error(errorMessage);
    return Observable.throw(errorMessage);

  }
}
