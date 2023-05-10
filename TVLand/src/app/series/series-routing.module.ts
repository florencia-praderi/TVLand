import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: ':id/detail',
    component: DetailPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [ 
    RouterModule.forChild(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class SeriesRoutingModule { }
