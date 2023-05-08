import { Component, ElementRef, ViewChild } from '@angular/core';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'series-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtInputTag')
  public inputTag!: ElementRef<HTMLInputElement>

  constructor(private seriesService: SeriesService) { }

  searchTag(newTag: string){
    this.seriesService.searchTag(newTag);
    this.inputTag.nativeElement.value = '';
  }

}
