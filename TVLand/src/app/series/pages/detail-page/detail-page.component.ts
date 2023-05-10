import { Component, OnInit } from '@angular/core';
import { Serie } from '../../interfaces/series.interfaces';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  serieId: string = '';
  serie: Serie = {
    id: 0,
    name: '',
    overview: '',
    poster_path: '',
    backdrop_path: '',
    vote_average: 0,
  };

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.serieId = params['id'];
      this.seriesService
        .getSerieDetail(this.serieId, 'es-ES')
        .subscribe((serie) => {
          this.serie = serie;
        });
    });
  }
}
