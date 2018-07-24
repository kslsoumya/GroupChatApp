import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpParams, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import * as io from 'socket.io-client';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public baseUrl = 'http://localhost:3000';
  private socket;

  constructor(public _http: HttpClient, private cookieService: CookieService) {
    this.socket = io(this.baseUrl);
  }


  public notification = (): any => {
    return Observable.create((observer) => {
      this.socket.on('notification', (data) => {
        observer.next(data);
      });
    });
  }

  public getActievGroups = (): any => {
    return Observable.create((observer) => {
      this.socket.on('active-groups', (data) => {
        observer.next(data);
      });
    });
  }

  public stoppedTyping = (): any => {
    return Observable.create((observer) => {
      this.socket.on('stopTypingNote', (data) => {
        observer.next(data);
      });
    });
  }

  public userTyping = (): any => {
    return Observable.create((observer) => {
      this.socket.on('typingNote', (data) => {
        observer.next(data);
      });
    });
  }


  public getMessage = (): any => {
    return Observable.create((observer) => {
      this.socket.on('get-msg', (data) => {
        observer.next(data);
      });
    });
  }


  public disConnect = (): any => {
    return Observable.create((observer) => {
      this.socket.on('disconnect', () => {
        observer.next();

      });
    });
  }

  public typing: any = (data) => {
    this.socket.emit('typing', data);
  }

  public userStoppedTyping = (data) => {
    this.socket.emit('stopTyping', data);
  }
  public setGroupActive: any = (group) => {
    console.log('group object' + group);
    this.socket.emit('set-active', group);
  }

  public setGroupInActive: any = (group) => {
    this.socket.emit('set-inActive', group);
  }

  public exitSocket: any = () => {
    this.socket.emit('disconnect');
  }

  public joinGroup = (user) => {
    this.socket.emit('join-group', user);
  }

  public sendMessageEvent = (data) => {
    console.log('sending message' + data);
    this.socket.emit('send-msg', data);

  }

  public leaveGroup = (user) => {
    this.socket.emit('leave-group', user);
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
