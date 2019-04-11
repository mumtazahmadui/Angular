import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'home',
  template: `
  <section class="jumbotron">
  <h2><img src="https://cdn.auth0.com/website/styleguide/getting-started-icon.svg" alt="Jumbotron image"/></h2>
  <h1>Auth0 QuickStart</h1>
  <p>Start your next Angular app with authentication out of the box and get to building that next great app in five simple steps.</p>
  <div class="btn btn-success btn-lg" *ngIf="!authService.authenticated" (click)="signup()">Sign Up for Free</div>
  <div class="btn btn-danger btn-lg" *ngIf="authService.authenticated" (click)="authService.logout()">Logout</div>
</section>

<article class="card-docs"><i class="card-docs-icon icon-budicon-499 orange"></i>
    <h2 class="card-docs-title">Step 1</h2>
    <p class="card-docs-description">Sign up for a <strong>free</strong> Auth0 account and get your <strong>Client ID</strong> and <strong>Domain</strong>. Set <code>{{url}}callback</code> as an <strong>allowed callback url</strong> in your Auth0 client.</p>
  </article>

  <article class="card-docs"><i class="card-docs-icon icon-budicon-499 orange"></i>
    <h2 class="card-docs-title">Step 2</h2>
    <p class="card-docs-description">Add your credentials in the <code>auth.config.ts</code> file located in the <code>/app/auth/</code> folder</p>
  </article>

  <article class="card-docs"><i class="card-docs-icon icon-budicon-499 orange"></i>
    <h2 class="card-docs-title">Step 3</h2>
    <p class="card-docs-description" *ngIf="!authService.authenticated"><a class="btn btn-success" (click)="authService.login()">Login</a></p>
    <p class="card-docs-description" *ngIf="authService.authenticated">You are already logged in. Proceed to next step!</p>
  </article>

  <article class="card-docs"><i class="card-docs-icon icon-budicon-499 orange"></i>
    <h2 class="card-docs-title">Step 4</h2>
    <p class="card-docs-description">Access <a routerLink="/account">protected page</a>. <strong>You must be logged in to do this!<br /> <span *ngIf="!authService.authenticated">You're currently not logged in!</span><span *ngIf="authService.authenticated">You are logged in!</span></strong></p>
  </article>

  <article class="card-docs"><i class="card-docs-icon icon-budicon-499 orange"></i>
    <h2 class="card-docs-title">Step 5</h2>
    <p class="card-docs-description">Export your project from StackBlitz and build the rest of your app! <br /> <a href="https://auth0.com/docs/quickstart/spa/angular2?utm_source=stackblitz&utm_medium=devsponsor&utm_campaign=stackblitz-angular">Read the docs</a> to learn more!</p>
  </article>

<div class="try-banner"><span>Don't have an account yet?</span><a class="btn btn-success btn-lg" (click)="signup()">Try Auth0 for Free</a>
</div>
`,
})
export class HomeComponent {
  url;

  constructor(public authService: AuthService) {
    this.url = window.location.href; 
  }

  signup(){
    window.open('https://auth0.com/signup?utm_source=stackblitz&utm_medium=devsponsor&utm_campaign=stackblitz-angular', '_blank');
  }

}