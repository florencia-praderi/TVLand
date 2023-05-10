import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SeriesService } from 'src/app/series/services/series.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output()
  public onValue = new EventEmitter<string>();

  @ViewChild('txtSearchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  constructor(private seriesService: SeriesService) { }

  emitValue(value: string): void {
    this.onValue.emit(value);
    this.searchInput.nativeElement.value = '';
  }
  
}