import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TripsComponent } from './pages/trips/trips';
import { TripDetailComponent } from './pages/trip-detail/trip-detail';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { BlogComponent } from './pages/blog/blog';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { Terms } from './terms/terms';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trips/:id', component: TripDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'privacy-policy', component: PrivacyPolicy, data: { hideLayout: true } },
  { path: 'terms', component: Terms, data: { hideLayout: true } },
  { path: '**', redirectTo: '/home' }
];