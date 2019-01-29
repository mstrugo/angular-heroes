import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';


const AppRoutes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HeroDashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // { path: '*', redirectTo: '/dashboard', pathMatch: 'full' },
];

export default AppRoutes;
