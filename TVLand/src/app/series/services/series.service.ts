import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchSeries, Serie } from '../interfaces/series.interfaces';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public SeriesList: Serie[] = [];

  private apiKey: string = 'c6aeee577586ba38e487b74dfede5deb';
  private serviceUrl: string = 'https://api.themoviedb.org/3'

  constructor( private http: HttpClient) { }

  searchTag(tag: string): void {
    if(tag.length === 0) return;

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', tag)
      .set('limit', '10')

    this.http.get<SearchSeries>(`${this.serviceUrl}/search/tv?`, {params})
      .subscribe(resp=> {
          this.SeriesList = resp.results;
          console.log({series: this.SeriesList});
        })
  }
}

