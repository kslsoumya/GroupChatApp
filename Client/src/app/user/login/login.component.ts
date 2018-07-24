import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide = true;
  public emailId;
  public password;

  constructor(private httpService: HttpService, private toastr: ToastrService, private _router: Router,
    private cookie: CookieService) { }

  ngOnInit() {
  }

  public loginUser = () => {
    const userData = {
      email: this.emailId,
      password: this.password
    };
    this.httpService.signIn(userData).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 200) {
          this.toastr.success(resp.message);
          this.cookie.set('authToken', resp.data.authToken);
          this.cookie.set('userId', resp.data.userDetails.userId);
          this.cookie.set('userName', resp.data.userDetails.firstName + resp.data.userDetails.lastName);
          this.cookie.set('userStatus', resp.data.userDetails.status);
          this._router.navigate(['/account/' + resp.data.userDetails.userId]);
        } else {
          this.toastr.warning(resp.message);
        }
      },
      (err) => {
        this.toastr.error(err.messsage);
      });

  }

}
