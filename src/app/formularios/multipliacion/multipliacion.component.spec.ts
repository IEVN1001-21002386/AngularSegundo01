import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipliacionComponent } from './multipliacion.component';

describe('MultipliacionComponent', () => {
  let component: MultipliacionComponent;
  let fixture: ComponentFixture<MultipliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipliacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
