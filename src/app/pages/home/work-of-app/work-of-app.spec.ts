import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOfApp } from './work-of-app';

describe('WorkOfApp', () => {
  let component: WorkOfApp;
  let fixture: ComponentFixture<WorkOfApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkOfApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkOfApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
