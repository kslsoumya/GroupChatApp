import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './group-chat/chat/chat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


import { UserModule } from './user/user.module';
import { GroupChatModule } from './group-chat/group-chat.module';

import { HttpService } from './http.service';
import { CookieService } from 'ngx-cookie-service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    GroupChatModule,
    UserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'account/:userId', component: ChatComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
