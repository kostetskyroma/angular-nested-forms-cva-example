import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativesInfoComponent } from './relatives-info.component';

describe('RelativesInfoComponent', () => {
  let component: RelativesInfoComponent;
  let fixture: ComponentFixture<RelativesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelativesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
