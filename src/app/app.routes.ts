import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Atlas } from './work/atlas/atlas';
import { Imbrace } from './work/imbrace/imbrace';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'atlas', component: Atlas},
  {path: 'imbrace', component: Imbrace},
];
