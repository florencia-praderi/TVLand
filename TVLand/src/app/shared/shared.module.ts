import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesModule } from '../series/series.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    FooterComponent,    
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SeriesModule
  ],
  exports: [
    FooterComponent,    
    NavbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
