import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
  path: 'packages', loadComponent: () =>
    loadRemoteModule('microfrontend-app-content', './PackageListComponent').then((m) => m.PackageListComponent),
}];
