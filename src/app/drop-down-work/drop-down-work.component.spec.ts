import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownWorkComponent } from './drop-down-work.component';

describe('DropDownWorkComponent', () => {
  let component: DropDownWorkComponent;
  let fixture: ComponentFixture<DropDownWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
