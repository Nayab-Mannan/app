import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDesignComponent } from './angular-design.component';

describe('AngularDesignComponent', () => {
  let component: AngularDesignComponent;
  let fixture: ComponentFixture<AngularDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
