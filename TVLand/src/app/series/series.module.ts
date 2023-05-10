import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { RecommendedSeriesComponent } from './components/recommended-series/recommended-series.component';
import { ContinueWatchingComponent } from './components/continue-watching/continue-watching.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SeriesRoutingModule } from './series-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CardListComponent,
    RecommendedSeriesComponent,
    ContinueWatchingComponent,
    DetailPageComponent

  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
  exports: [
    HomePageComponent,
    CardListComponent,
    RecommendedSeriesComponent,
    ContinueWatchingComponent,
    DetailPageComponent
  ]

})
export class SeriesModule { }
