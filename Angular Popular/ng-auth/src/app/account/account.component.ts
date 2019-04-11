import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'account',
  template: `
    <section class="jumbotron">
    <h2><img src="{{profile.picture}}" alt="Jumbotron image"/></h2>
    <h1>{{profile.name}}</h1>
    <p>Well done!</p>
    <div class="btn btn-success btn-lg" routerLink="/">Back to Homepage</div>
  </section>
  `
})
export class AccountComponent {
  profile: any;

  constructor(public authService: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
   }

}