import { Component, OnInit } from '@angular/core';


import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  public email: String;
  public isSent = false;
  public message = 'Password Changed Successfully !!';
  public pwd: String;
  // public oldPwd: String;

  constructor(private httpService: HttpService, private toastr: ToastrService, private _router: Router
    ) { }

  ngOnInit() {
  }

  public forgotPwd = () => {
    const data = {
      email : this.email,
      password : this.pwd
    };
    this.httpService.pwdService(data).subscribe(
      (resp) => {
        if (resp['status'] === 200) {
          this.isSent = true;
          this._router.navigate(['/home']);
        } else {
          this.toastr.warning(resp['message']);
        }
      },
      (err) => {
        this.toastr.error(err);
      });
  }

}
