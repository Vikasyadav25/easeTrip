import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { PartnersMarquee } from './components/partners-marquee/partners-marquee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NavbarComponent,
    FooterComponent,
    PartnersMarquee
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  hideLayout = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activatedRoute.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }
        this.hideLayout = route?.snapshot.data?.['hideLayout'] === true;
      });
  }
}
