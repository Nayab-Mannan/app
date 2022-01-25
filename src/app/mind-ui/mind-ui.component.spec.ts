import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindUiComponent } from './mind-ui.component';

describe('MindUiComponent', () => {
  let component: MindUiComponent;
  let fixture: ComponentFixture<MindUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
