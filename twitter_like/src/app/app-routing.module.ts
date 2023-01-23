import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./views/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'authenticate',
    loadChildren: () =>
      import('./views/authenticate/authenticate.module').then((m) => m.AuthenticateModule),
  },
  {
    path: 'tweet/:id',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    data: {
      reuseRoute: true
    },
     loadChildren: () =>
      import('./views/tweet-fullscreen/tweet-fullscreen.module').then((m) => m.TweetFullscreenModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
