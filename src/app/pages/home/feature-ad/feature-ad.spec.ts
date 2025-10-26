import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAd } from './feature-ad';

describe('FeatureAd', () => {
  let component: FeatureAd;
  let fixture: ComponentFixture<FeatureAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
