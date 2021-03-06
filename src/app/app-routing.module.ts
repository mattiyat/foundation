import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { UserProfileComponent } from './shared/user-profile/user-profile.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // , canActivate: [AuthGuard]
  { path: 'item', component: ItemDetailsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
