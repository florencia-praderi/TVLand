import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then( m => m.SeriesModule)
  },
  {
    path: '',
    redirectTo: 'series',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
