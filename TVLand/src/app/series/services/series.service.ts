import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchSeries, Serie } from '../interfaces/series.interfaces';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public SeriesList: Serie[] = [];
  public recommendedSeries: Serie[] = [];

  private apiKey: string = 'c6aeee577586ba38e487b74dfede5deb';
  private serviceUrl: string = 'https://api.themoviedb.org/3'

  constructor( private http: HttpClient) { }

  searchSerie(term: string): void {
    if(term.length === 0) return;

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', term)
      .set('limit', '10')

    this.http.get<SearchSeries>(`${this.serviceUrl}/search/tv?`, {params})
      .subscribe(resp=> {
          this.SeriesList = resp.results;
          console.log({'Results': this.SeriesList});
        })
  }

  getRecommendedSeries(): Observable<Serie[]> {
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('sort_by', 'popularity.desc')
    .set('page', Math.floor(Math.random() * 100).toString())
  
    return this.http.get<SearchSeries>(`${this.serviceUrl}/discover/tv`, {params})
      .pipe(map(resp => resp.results.slice(0, 4)));
  }

  getContinueWatching(): Observable<Serie[]> {
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('page', '1')
    .set('vote_average.gte', '7') 

    return this.http.get<SearchSeries>(`${this.serviceUrl}/discover/tv`, {params})
      .pipe(map(resp => resp.results.slice(0, 4)));
  }

  getSerieDetail(id: string, language: string): Observable<Serie> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', language);
  
    return this.http.get<Serie>(`${this.serviceUrl}/tv/${id}`, { params });
  }

}

