import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public password: String;
  public emailId: String;
  public mobile: Number;
  public firstName: String;
  public lastName: String;
  public status: String;



  constructor(private httpService: HttpService , private toastr: ToastrService, private _router: Router) { }

  ngOnInit() {
  }
  public createUser: any = () => {
    const newUser = {
      password: this.password,
      email: this.emailId,
      mobile: this.mobile,
      firstName: this.firstName,
      lastName: this.lastName,
      status:this.status
    };
    this.httpService.signUp(newUser).subscribe(
      (response) => {
        console.log(response);
        if (response['status'] === 200) {
        this.toastr.success('User Created successfully!!');
        setTimeout(() => {
          this._router.navigate(['/home']);
        });
        }  else {
        this.toastr.warning(response.message);
        }
    },
      (err) => {
        this.toastr.error(err.message);
      });
  }

}
