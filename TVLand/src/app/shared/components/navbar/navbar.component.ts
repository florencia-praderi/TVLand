import { Component } from '@angular/core';
import { SeriesService } from '../../../series/services/series.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private seriesService: SeriesService ) { }

  search(term: string): void {
    this.seriesService.searchSerie(term);
  }
  
}
