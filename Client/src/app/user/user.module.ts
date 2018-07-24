import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forChild([
      { path: 'forgotPwd', component: ForgotPwdComponent }
    ])

  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [LoginComponent, SignUpComponent, ForgotPwdComponent]
})
export class UserModule { }
