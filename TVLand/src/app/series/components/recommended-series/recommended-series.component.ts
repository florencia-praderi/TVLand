import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../interfaces/series.interfaces';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recommended-series',
  templateUrl: './recommended-series.component.html',
  styleUrls: ['./recommended-series.component.scss']
})
export class RecommendedSeriesComponent implements OnInit {

  public recommendedSeries: Serie[] = [];

  constructor(private seriesService: SeriesService,
              private router: Router){ }

  ngOnInit(): void {
    this.seriesService.getRecommendedSeries()
    .subscribe(resp=> {
      this.recommendedSeries = resp;
    })
  }
  goToDetailPage(id: number | undefined) {
    this.router.navigate([id, 'detail']);
  }
}
