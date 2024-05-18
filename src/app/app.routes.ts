import { Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: ElementsHomeComponent },
  { path: 'elements', component: ElementsHomeComponent },
  { path: 'collections', component: CollectionsHomeComponent },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
];
