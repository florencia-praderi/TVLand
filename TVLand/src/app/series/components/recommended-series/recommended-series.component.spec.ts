import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedSeriesComponent } from './recommended-series.component';

describe('RecommendedSeriesComponent', () => {
  let component: RecommendedSeriesComponent;
  let fixture: ComponentFixture<RecommendedSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
