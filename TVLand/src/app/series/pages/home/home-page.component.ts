import { Component, Input, ViewChild } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/series.interfaces';
import { CardListComponent } from '../../components/card-list/card-list.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public series: Serie[] = [];
  public recommendedSeries: Serie[] = [];

  constructor(private seriesService: SeriesService) { 
    this.seriesService.getRecommendedSeries()
        .subscribe(resp => {
          this.recommendedSeries = resp
        })
      this.series = this.seriesService.SeriesList;
  }

  get seriesList(): Serie[] {
    return this.seriesService.SeriesList;
  }

}
