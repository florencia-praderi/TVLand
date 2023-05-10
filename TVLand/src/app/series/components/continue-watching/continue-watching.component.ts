import { Component, OnInit } from '@angular/core';
import { Serie } from '../../interfaces/series.interfaces';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'continue-watching',
  templateUrl: './continue-watching.component.html',
  styleUrls: ['./continue-watching.component.css'],
})
export class ContinueWatchingComponent implements OnInit {
  public continueWatching: Serie[] = [];

  constructor(private seriesService: SeriesService, private router: Router) {}

  ngOnInit(): void {
    this.seriesService.getContinueWatching().subscribe((resp) => {
      this.continueWatching = resp;
    });
  }

  goToDetailPage(id: number | undefined) {
    this.router.navigate([id, 'detail']);
  }
}
