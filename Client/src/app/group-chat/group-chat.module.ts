import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat/chat.component';

import { FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    AngularFontAwesomeModule,
    RouterModule.forChild([])
  ],
  exports : [
    MatButtonModule,
     MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [ChatComponent]
})
export class GroupChatModule { }
