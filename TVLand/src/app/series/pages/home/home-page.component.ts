import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/series.interfaces';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private seriesService: SeriesService) { }

  get series(): Serie[] {
    return this.seriesService.SeriesList
  }

}
