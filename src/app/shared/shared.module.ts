import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UserService,
    AuthService
  ],
  exports: []
})
export class SharedModule { }
