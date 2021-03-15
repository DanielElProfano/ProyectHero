import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
  path: 'finder',
  loadChildren: () =>
    import('./pages/finder/finder.module').then((m) => m.FinderModule)
},
{
  path: 'home',
  loadChildren: () =>
    import('./pages/home/home.module').then((m) => m.HomeModule)
},
{
path: 'join',
loadChildren: () =>
  import('./pages/join/join.module').then((m) => m.JoinModule)
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
