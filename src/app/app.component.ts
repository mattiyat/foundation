import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// import { UserProfileComponent } from './user-profile/user-profile.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService){}
  title = 'foundation';
  faCoffee = faCoffee;
}
