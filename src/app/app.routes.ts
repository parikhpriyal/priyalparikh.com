import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { Eai } from './work/eai/eai';
import { Sales } from './work/sales/sales';
import { Atlas } from './work/atlas/atlas';
import { Imbrace } from './work/imbrace/imbrace';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'eai', component: Eai},
  {path: 'sales', component: Sales},
  {path: 'atlas', component: Atlas},
  {path: 'imbrace', component: Imbrace},
];

RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'});
