import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalComponent } from './modal/modal.component';
import { UsersComponent } from './listOfUsers/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './listOfUsers/users.module';
@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    ModalComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent,UsersModule]
})
export class AppModule { }
