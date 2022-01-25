import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseRowsComponent } from './collapse-rows.component';

describe('CollapseRowsComponent', () => {
  let component: CollapseRowsComponent;
  let fixture: ComponentFixture<CollapseRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
