import { Routes } from '@angular/router';
import { GetQuoteComponent } from './pages/get-quote/get-quote';
import { SelectPlanComponent } from './pages/select-plan/select-plan';
import { MyHealthComponent } from './pages/my-health/my-health';
import { AboutMeComponent } from './pages/about-me/about-me';
import { ConfirmationComponent } from './pages/confirmation/confirmation';

export const routes: Routes = [
  { path: '', redirectTo: '/get-quote', pathMatch: 'full' },
  { path: 'get-quote', component: GetQuoteComponent },
  { path: 'select-plan', component: SelectPlanComponent },
  { path: 'my-health', component: MyHealthComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];