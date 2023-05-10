import { Component, Input } from '@angular/core';
import { Serie } from '../../interfaces/series.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'series-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public series: Serie[] = [];


  constructor(private router: Router) {}

  goToDetailPage(id: number | undefined) {
    this.router.navigate([id, 'detail']);
}

}
