import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSolComponent } from './geo-sol.component';

describe('GeoSolComponent', () => {
  let component: GeoSolComponent;
  let fixture: ComponentFixture<GeoSolComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GeoSolComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
